import { Link } from "react-router-dom";
import "bulma"
import "../App.css"

const Header = (props) => {
  return (
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
    {/* <nav className="header"> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* </nav> */ }
  </div>
    </section>
  )
};

export default Header;
