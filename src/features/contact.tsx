import { useState } from "react";
import Button from "../components/button";
import Field from "../components/field";
import Container from "../components/container";

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
    <div className="contact">
      <Container>
      <Field
        id="First Name"
        onChange={(value: string) => handleInputsValue(value, "lastName")}
        value=""
        label="First Name"
      />
      <Field
        id="Last Name"
        value=""
        onChange={(value: string) => handleInputsValue(value, "lastName")}
        label="Last Name"
      />
      <Field
        id="Email"
        value=""
        onChange={(value: string) => handleInputsValue(value, "lastName")}
        label="Email"
      />

      <Button text="send" size="md" />
      </Container>
     
    </div>
  );
};

export default Contact;
