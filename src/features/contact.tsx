import { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";

type ValuesType = {
  [key: string]: string;
};

const obj: ValuesType = {
  firstName: "",
  lastName: "",
  email: "",
};

const Contact = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(obj);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };
  return (
    <>
      <Input
        placeholder="First Name"
        onChange={(value: string) => handleInputsValue(value, "lastName")}
        value="First Name"
      />
      <Input
        placeholder="Last Name"
        value="Last Name"
        onChange={(value: string) => handleInputsValue(value, "lastName")}
      />
      <Input
        placeholder="Email"
        value="Email"
        onChange={(value: string) => handleInputsValue(value, "lastName")}
      />
      <Button text="send" />
    </>
  );
};

export default Contact;
