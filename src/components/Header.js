import { Link } from "react-router-dom";
import "../App.css"

const Header = (props) => {
  return <nav className="header">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>;
};

export default Header;
