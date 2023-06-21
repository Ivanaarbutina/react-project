import { Route, Routes } from "react-router-dom";
import "./styles/style.scss";
import Home from "./features/home";

import Layout from "./components/layout";
import NoMatch from "./features/no-match";
import Contact from "./features/contact";
import ProgresBar from "./features/progress-bar";
import ProgresBarPage from "./features/progress-bar-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="progress-bar"
          element={<ProgresBar color="orange" progress={70} size="lg" />}
        />
        <Route path="progress-bar-page" element={<ProgresBarPage />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
