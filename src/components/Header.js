import { Link } from "react-router-dom";
import "bulma";
import "../App.css";
import {useState} from "react"

const Header = (props) => {

const [isActive, setisActive] = useState(false)


  return (
    <nav
      className="navbar"
      className="is-active"
      role="navigation"
      data-target="navMenu"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="https://elated-galileo-2ab1e7.netlify.app/"
        >
          <img src="/navlogo.png" width="128" />
        </a>
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      {/* <nav className="header"> */}
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a className="navbar-item">
            <Link to="/">Home</Link>
          </a>
          <a className="navbar-item">
            <Link to="/about">About</Link>
          </a>
        </div>
      </div>
      {/* </nav> */}
    </nav>
  );
};

export default Header;
