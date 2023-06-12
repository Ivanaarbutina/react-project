import Download from "../assets/download";
import Button from "./button";
import Container from "./container";
import Devider from "./devider";
import Input from "./input";
import Table from "./table";

const Components = () => {
  return (
    <div className="components">
      <div className="container">
        <h2>Button</h2>
        <Button text="Click me" />
      </div>
      <Container>
        <h2>Input</h2>
        <Input icon={<Download />} />
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
