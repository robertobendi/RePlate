import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <header className={classes.navigation}>
      <nav class="navbar sticky-top navbar-expand-lg">
        <div class="collapse navbar-collapse d-flex">
          <ul>
            <li>
              <div className={classes.logo}>RePlate-Footer</div>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page1</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Footer;
