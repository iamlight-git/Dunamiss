import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Students from "./pages/Students";
import Alumni from "./pages/Alumni";
import Admission from "./pages/Admission";
import About from "./pages/About";
import Teachings from "./pages/Teachings";
import SearchResults from "./pages/SearchResults";
import Contact from "./pages/Contact";
import Give from "./pages/Give";
import Announcements from "./pages/Announcements";

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
        <Route path="/search" element={<SearchResults />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/give" element={<Give />} />
        <Route path ="/announcements" element = {<Announcements />}/>

      </Routes>
    </Router>
  );
}
