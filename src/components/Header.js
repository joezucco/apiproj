import { Link } from "react-router-dom";
import "bulma"
import "../App.css"

const Header = (props) => {
  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-brand">
        <a class="navbar-item" href=""
        {/* <nav className="header"> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* </nav> */}
      </div>
    </nav>
  );
};

export default Header;
