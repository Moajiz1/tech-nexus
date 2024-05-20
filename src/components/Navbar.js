import "../App.css";
import tech from "../tech.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
      <nav>
        <div className="container">
          <img src={tech} alt="Logo" className="logo" />
          <h1 margin-left="100px">Tech Nexus</h1>
          <ul>
            <li padding-top="100px">
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs Posts</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
