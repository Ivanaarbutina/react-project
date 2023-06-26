import { useEffect, useState } from "react";
import AnimalCard from "./animal-card";
import Pagination from "../../components/pagination";

export type AnimalType = {
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};
const rpp = 8;
const noOfItems = 20;
const numberOfPages = Math.ceil(20 / 8);
const Animals = () => {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2);
  const getAnimals = () => {
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setAnimals(data);
        }, 2000);
        setLoading(false);
        console.log(data);
        setAnimals(data);
      });
  };
  useEffect(() => {
    getAnimals();
  }, [page]);

  return (
    <div>
      <h2>Animals</h2>
      <div className="grid grid--primary">
        {animals.map((animal: AnimalType) => {
          return <AnimalCard animal={animal} />;
        })}{" "}
        ;
      </div>
      <Pagination />
    </div>
  );
};

export default Animals;
