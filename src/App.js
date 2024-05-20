import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./components/blogposts/Blogs";
import Contact from "./components/contact/Contact";
import HomePage from "./components/home/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
