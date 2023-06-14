import { useState } from "react";
import Download from "../assets/download";
import Button from "./button";
import Container from "./container";
import Devider from "./devider";
import Input from "./input";
import Table from "./table";
import Check from "../assets/check";
import Modal from "./modal";

type ValuesType = {
  [key: string]: string;
};

const obj: ValuesType = {
  firstName: "",
  lastName: "",
};

const Components = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(obj);
  const [newState, setNewState] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <div className="components">
      <Container>
        <h2>Button</h2>
        <Button text="Click me" />
      </Container>
      <Container>
        <h2>Input</h2>
        <Input
          disabled={true}
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
        <h2>Modal</h2>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Open Modal
        </button>
        {showModal && (
          <Modal
            title="Title"
            size="lg"
            onClick={() => {
              setShowModal(false);
            }}
            isOpen={showModal}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur,<br></br> adipisicing elit.
              Vel cumque laudantium, <br></br>voluptates harum, autem corporis
              dolor voluptatem<br></br> nam optio magnam laborum velit
              repellendus. Reiciendis .
            </p>
          </Modal>
        )}
      </Container>
      <Container>
        <h2>Devider</h2>
        <Devider />
      </Container>
    </div>
  );
};

export default Components;
