import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Students from "./pages/Students";
import Alumni from "./pages/Alumni";
import Admission from "./pages/Admission";
import About from "./pages/About";
import Teachings from "./pages/Teachings";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/students" element={<Students />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachings" element={<Teachings />} />
      </Routes>
    </Router>
  );
}
