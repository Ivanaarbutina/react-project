import { useState } from "react";
import Container from "../../components/container";
import Field from "../../components/field";
import { AnimalType } from "./animals";
import Button from "../../components/button";
import { ValuesType } from "../contact/types";
import { v4 as uuidv4 } from "uuid";

const dataHeaders = {
  "Content-Type": "application/json",
};

const initialData: AnimalType = {
  id: "",
  name: "",
  species: "",
  animalClass: "",
  diet: "",
  habitat: "",
};

const AnimalCreate = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);
  const [error, setError] = useState<string>("");

  const navigate =

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  const OnSubmit = (inputsValue: ValuesType) => {
    
    let getOut = false;
    const errorInputs = "";
    const keys = Object.keys(inputsValue);
    // for (let i = 0; i < Object.keys(inputsValue).length; i++)
    // Object.keys(inputsValue).forEach((key) => {
    //   console.log(inputsValue[key]);
    //   if (inputsValue[key] === ""){
    //     getOut = true;
    //     alert("ne moze biti prazno")
    //   }
    // });
    Object.keys(inputsValue).forEach((key) => {
      if (inputsValue[key] === "") {
        getOut = true;
        const errorInputs = errorInputs + key + ", ";
      }
    });
    if (getOut) {
      setError("moraju svi inputi biti pounjeni");

      return;
    }

    fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: dataHeaders,
      body: JSON.stringify(inputsValue),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log("prošlo je dobro")
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h2>Create a new animal</h2>
      {
        error ? <div className="message message--error">{error}</div>
      }
      <div>
        <Field
          id="name"
          value=""
          label="name of an animal"
          onChange={(newValue) => handleInputsValue(newValue, "name")}
        />
        <Field
          id="species"
          value=""
          label="species of an animal"
          onChange={(newValue) => handleInputsValue(newValue, "species")}
        />
        <Field
          id="animalClass"
          value=""
          label="animalClass"
          onChange={(newValue) => handleInputsValue(newValue, "animalClass")}
        />
        <Field
          id="diet"
          value=""
          label="diet"
          onChange={(newValue) => handleInputsValue(newValue, "diet")}
        />
        <Field
          id="habitat"
          value=""
          label="habitat"
          onChange={(newValue) => handleInputsValue(newValue, "habitat")}
        />
      </div>
      <Button text="dodaj zivotinju" onClick={() => OnSubmit(inputsValue)} />
      <Button text="delete"/>
    </Container>
  );
};

export default AnimalCreate;
