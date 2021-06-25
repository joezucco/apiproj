import { Link } from "react-router-dom";
import "bulma";
import "../App.css";
import { useState } from "react"

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
      <div className="navbar-brand"
      >
        <a
          id="header-logo"
          className="navbar-item"
          href="/"
        >
          <span>
            <img src="navlogo.png" alt="logo6" style={{maxHeight: "70px",
            }} />
          </span>
        </a>
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger  ${isActive ? "is-active" : ""}`}
          style={{ marginTop: "20px" }}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar">
            <a className="navbar-item is-link">
              <Link  to="/">Home</Link>
            </a>
            <a className="navbar-item">
              <Link to="/about">About</Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
