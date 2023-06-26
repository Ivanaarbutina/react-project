import { useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import ProgresBar from "../../components/progress-bar";

const ProgresBarPage = () => {

  const [progressValue, setProgressValue] = useState<number>(20);

  const handleProgressValue = (operation: "+" | "-") => {
    if (progressValue >= 0 && progressValue <= 100) {
      if (operation === "+") {
        setProgressValue(progressValue + 5);
      } else {
        setProgressValue(progressValue - 5);
      }
    }
  };

  
  
  return (
    <div>
      <Container>
        <h2>Progress bar</h2>
        <ProgresBar progress={progressValue} />
        <Button
          disabled={progressValue === 0}
          onClick={() => handleProgressValue("-")}
          text="Minus 5%"
          size="md"
          color="red"
        />
        <Button
          disabled={progressValue === 100}
          onClick={() => handleProgressValue("+")}
          text="Plus 5%"
          size="md"
        />
      </Container>
    </div>
  );
};

export default ProgresBarPage;
