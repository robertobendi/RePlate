import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={classes.navigation}>
      <nav class="navbar sticky-top navbar-expand-lg">
        <div class="collapse navbar-collapse d-flex">
          <ul>
            <li>
              <div className={classes.logo}>RePlate-Footer</div>
            </li>
            <li>
              <h5>
                <br />
                2022 RePlate is a project created by{" "}
                <a href="https://github.com/robertobendi/">
                  Roberto Bendinelli
                </a>
              </h5>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
