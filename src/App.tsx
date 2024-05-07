import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Intro } from "./pages/intro/intro";
import { Projects } from "./pages/project/projects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="app" element={<Layout />}>
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
};

export default App;
