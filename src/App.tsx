import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import "./styles/style.scss";
import Home from "./components/home";
import Components from "./components/components";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/components",
      element: <Components />,
    },
   
  ]);
  return (
    <>
        <Header/>
        <RouterProvider router={router} />
    </>
  )
}

export default App;
