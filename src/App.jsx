import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>Rishabh Mahendra</h2>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>

          <a href="/portfolio/resume.pdf" target="_blank" rel="noreferrer">
          Resume
          </a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;