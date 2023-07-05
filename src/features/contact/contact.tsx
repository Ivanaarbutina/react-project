import { useState } from "react";
import Button from "../../components/button";
import Field from "../../components/field";
import Container from "../../components/container";
import { ValuesType } from "./types";


const initialData: ValuesType = {
  firstName: "",
  lastName: "",
  email: "",
};

const Contact = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };
  return (
    <div className="contact">
      <Container>
       
      <Field
        id="firstName"
        onChange={(value: string) => handleInputsValue(value, "firstName")}
        value={inputsValue.firstName}
        label="First Name"
      />
      <Field
        id="lastName"
        value={inputsValue.lastName}
        onChange={(value: string) => handleInputsValue(value, "lastName")}
        label="Last Name"
      />
      <Field
        id="email"
        value={inputsValue.email}
        onChange={(value: string) => handleInputsValue(value, "email")}
        label="Email"
      />

      <Button 
       text="send" 
       size="md" 
       onClick={() => console.log(inputsValue)}
       />
      </Container>
    </div>
  );
};

export default Contact;
