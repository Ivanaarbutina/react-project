import { useState } from "react";
import Download from "../assets/download";
import Button from "./button";
import Container from "./container";
import Devider from "./devider";
import Input from "./input";
import Table from "./table";
import Check from "../assets/check";

type ValuesType = {
  [key: string] : string;
};

const obj: ValuesType = {
  firstName: "",
  lastName: "",
};

const Components = () => {
  const [inputsValue,setInputsValue] = useState<ValuesType>(obj);
  const [newState,setNewState] = useState<string>("");

  const handleInputsValue = (value:string, id: string) => {
    const newState: ValuesType = {...inputsValue};
    newState[id] = value;
    setInputsValue(newState);
  }
  return  (
    <div className="components">
      <Container>
      <h2>Button</h2>
        <Button text="Click me" />
      </Container>
      <Container>
        <h2>Input</h2>
        <Input 
        size="sm"
          icon={<Download />}
          value={inputsValue.firstName}
          placeholder="First name"
          onChange={(value: string) => handleInputsValue(value, "lastName")}
          />
            <Input
          value={inputsValue.lastName}
          icon={<Check />}
          placeholder="Last name"
          onChange={(value: string) => handleInputsValue(value, "lastName")}
        />
            <Input
          value={newState}
          onChange={(value: string) => setNewState(value)}
        />
        <button onClick={() => console.log(inputsValue)}>Get values</button>
      </Container>
      <Container>
        <h2>Table</h2>
        <Table />
      </Container>
      <Container>
        <h2>Devider</h2>
        <Devider />
      </Container>
    </div>
  );
};

export default Components;
