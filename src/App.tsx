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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="progress-bar" element={<ProgresBarPage />} />
        <Route path="loader" element={<LoaderPage />} />
        <Route path="select" element={<SelectPage />} />
        <Route path="animals" element={<Animals />} />
        <Route path="animals/new" element={<>Dosli smo na novi page</>}></Route>
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
