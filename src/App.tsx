import { Route, Routes } from "react-router-dom";
import "./styles/style.scss";
import Home from "./features/home/home";

import Layout from "./components/layout";
import NoMatch from "./features/no-match/no-match";
import Contact from "./features/contact/contact";
import ProgresBarPage from "./features/progress-bar-page/progress-bar-page";
import LoaderPage from "./features/loader/loader-page";
import SelectPage from "./features/select/select-page";
import Animals from "./features/animals/animals";
import AnimalCreate from "./features/animals/animal-create";
import NewHome from "./components/new-home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="new-home" element={<NewHome />} />
        <Route path="progress-bar" element={<ProgresBarPage />} />
        <Route path="loader" element={<LoaderPage />} />
        <Route path="select" element={<SelectPage />} />
        <Route path="animals" element={<Animals />} />
        <Route path="animals/new" element={<AnimalCreate />} />
        <Route
          path="animals/:animalId"
          element={<>Došli smo na stranicu neke životinje</>}
        />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
