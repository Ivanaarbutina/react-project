import { useState } from "react";
import Button from "../../components/button"
import Container from "../../components/container"
import Loader from "../../components/loader"

const LoaderPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },4000);
  };
  return (
    <Container>
     <h2>Loader</h2>
      <Loader isActive={loading} />
      <Button 
       text="Turn on the loader"
       size="md"
       onClick={() => handleLoader()}
      />
    </Container>
    
  )
}

export default LoaderPage