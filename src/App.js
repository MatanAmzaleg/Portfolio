import "./scss/main.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AppHeader } from "./cmps/AppHeader";
import { MyPortfolio } from "./views/MyPortfolio";
import { About } from "./views/About";
import { Contact } from "./views/ContactMe";
import { MyProjects } from "./views/MyProjects";
import { AppFooter } from "./cmps/AppFooter";
import { ProjectDetails } from "./views/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="main-app">
        <AppHeader></AppHeader>
        <main className="main-container">
        <Routes>
          <Route exact path="/" element={<MyPortfolio />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/my-projects" element={<MyProjects />}/>
          <Route exact path="/project/:id" element={<ProjectDetails />}/>
        </Routes>
        </main>
        <AppFooter></AppFooter>
      </div>
    </Router>
  );
}

export default App;
