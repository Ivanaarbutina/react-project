import { useEffect, useState } from "react";
import AnimalCard from "./animal-card";
import Pagination from "../../components/pagination";
import Container from "../../components/container";
import Loader from "../../components/loader";
import Select from "../../components/select";
import { OptionType } from "../select/select-page";
import FloatingButton from "../../components/floating-button";

export type AnimalType = {
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};

const noOfItems = 20;
const rppOptions: OptionType[] = [
  {
    label: "4 životinje",
    value: "4",
  },
  {
    label: "8 životinja",
    value: "8",
  },
  {
    label: "12 životinja",
    value: "12",
  },
];

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  //rows per page (limit koliko itema vidimo od jednom)
  const [rpp, setRpp] = useState<number>(8);

  const getAnimals = () => {
    setLoading(true);
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setAnimals(data);
          setLoading(false);
        }, 300);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const numberofPages = Math.ceil(noOfItems / rpp);
    if ( page > numberofPages) {
      setPage(numberofPages);
    } else {
      getAnimals();
    }
  }, [page, rpp]);

  return (
    <Container>
      <Loader isActive={loading} />
      <div className="animals__header">
        <h2 className="animals__title">Animals</h2>
        <Select
          options={rppOptions}
          onChange={(activeRpp) => setRpp(Number(activeRpp.value))}
          defaultValue={rppOptions[1]}
        />
      </div>

      <div className="grid grid--primary">
        {animals.map((animal: AnimalType) => {
          return <AnimalCard key={animal.name} animal={animal} />;
        })}{" "}
        ;
      </div>
      <Pagination
        activePage={page}
        numberOfPages={Math.ceil(noOfItems / rpp)}
        onPaginate={(activePage) => setPage(activePage)}
      />
      <FloatingButton />
    </Container>
  );
};

export default Animals;
