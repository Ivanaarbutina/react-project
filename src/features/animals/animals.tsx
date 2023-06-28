import { useEffect, useState } from "react";
import AnimalCard from "./animal-card";
import Pagination from "../../components/pagination";
import Container from "../../components/container";
import Loader from "../../components/loader";

export type AnimalType = {
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};

//rows per page (limit koliko itema vidimo odjednom)
const rpp = 8;
const noOfItems = 20;
const numberOfPages = Math.ceil(20 / 8);

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const getAnimals = () => {
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setAnimals(data);
          setLoading(false);
        }, 2000);
      })
        .catch((err) => console.log(err));
    };  
      
  useEffect(() => {
    getAnimals();
  }, [page]);

  return (
    <Container>
      {/* <Loader isActive={loading}/> */}
       <h2>Animals</h2>
        <div className="grid grid--primary">
          {animals.map((animal: AnimalType) => {
            return <AnimalCard key={animal.name} animal={animal} />;
          })}{" "}
          ;
        </div>
      <Pagination 
        onPaginate={(activePage) => console.log("active page: ", activePage)}
      />
    </Container>
     
    
  );
};

export default Animals;
