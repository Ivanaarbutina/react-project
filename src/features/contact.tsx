import { useState } from "react";
import Button from "../components/button";
import Field from "../components/field";

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
      <Field
        id="First Name"
        onChange={(value: string) => handleInputsValue(value, "lastName")}
        value="First Name"
        label="First Name"
      />
      <Field
        id="Last Name"
        value="Last Name"
        onChange={(value: string) => handleInputsValue(value, "lastName")}
        label="Last Name"
      />
      <Field
        id="Email"
        value="Email"
        onChange={(value: string) => handleInputsValue(value, "lastName")}
        label="Email"
      />

      <Button text="send" />
    </div>
  );
};

export default Contact;
