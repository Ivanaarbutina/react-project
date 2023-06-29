import { useState } from "react";
import Check from "../../assets/check";
import Download from "../../assets/download";
import Button from "../../components/button";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Input from "../../components/input";
import Modal from "../../components/modal";
import Table from "../../components/table";


const Home = () => {
  type ValuesType = {
    [key: string]: string;
  };

  const obj: ValuesType = {
    firstName: "",
    lastName: "",
  };

  const [inputsValue, setInputsValue] = useState<ValuesType>(obj);
  const [newState, setNewState] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };
  return (
    <div className="home">
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
          <Button
          text="Open modal"
            onClick={() => {
              setShowModal(true);
            }}
          />
          <Modal
            onSuccess={() => {
              alert("Success");
              setShowModal(false);
            }}
            isOpen={showModal}
            title="Moj prvi modal"
            //kada unutar komponente pozovemo onClose callback ovdje će nam doći kod i izvršit će se sve što napišemo u tijelo arrow funkcije
            onClose={() => setShowModal(false)}
            >biohiozzo</Modal>
        </Container>
        <Container>
          <h2>Devider</h2>
          <Devider />
        </Container>
      </div>
    </div>
  );
};

export default Home;
