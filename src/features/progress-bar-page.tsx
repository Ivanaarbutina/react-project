import Button from "../components/button";
import ProgresBar from "./progress-bar";

const ProgresBarPage = () => {
  return (
    <div>
      <ProgresBar />
      <Button text="minus 5%" />
      <Button text="plus 5%" />
    </div>
  );
};

export default ProgresBarPage;
