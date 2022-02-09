import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

//demo content
import logo from "./img/logo.png";

function Navbar() {
  return (
    <header className={classes.navigation}>
      <nav class="navbar sticky-top navbar-expand-lg">
        <div class="collapse navbar-collapse d-flex">
          <ul>
            <li>
              <img src={logo} className={classes.logoimage}></img>
            </li>
            <li>
              <div className={classes.logo}>RePlate-navbar</div>
            </li>
            <li>
              <Link to="/" className={classes.navlink}>Home</Link>
            </li>
            <li>
              <Link to="/page1" className={classes.navlink}>Page1</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
