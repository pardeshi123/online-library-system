import { Link } from "react-router-dom";
import "./indexx.css";

const Navbar = () => {
  return (
    <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/browse">Browse Books</Link>
    <Link to="/add">Add Book</Link>
  </nav>
  
  );
};

export default Navbar;
