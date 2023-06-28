import { useState } from "react";
import Container from "../../components/container";
import Field from "../../components/field";
import { AnimalType } from "./animals";
import Button from "../../components/button";

const initialData: AnimalType = {
  name: "",
  species: "",
  animalClass: "",
  diet: "",
  habitat: "",
};

const AnimalCreate = () => {
  const [inputsValue, setInputsValue] = useState<AnimalType>(initialData);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };
  return;
  <Container>
    <h2>Create a new animal</h2>
    <div>
      <Field
        id="name"
        value=""
        label="name of an animal"
        onChange={(newValue) => handleInputsValue(newValue, "animalClass")}
      />
      <Field
        id="name"
        value=""
        label="name of an animal"
        onChange={(newValue) => handleInputsValue(newValue, "animalClass")}
      />
      <Field
        id="name"
        value=""
        label="name of an animal"
        onChange={(newValue) => handleInputsValue(newValue, "animalClass")}
      />
      <Field
        id="name"
        value=""
        label="name of an animal"
        onChange={(newValue) => handleInputsValue(newValue, "animalClass")}
      />
    </div>
    <Button text="dodaj zivotinju" />
  </Container>;
};

export default AnimalCreate;
