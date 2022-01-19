import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navigation.module.css";
import css from "./Pages.module.css";

//demo content
import logo from "./img/logo.png";

function Page1() {
  return (
    <body className={css.body}>
      <h1>Page1</h1>
      <img src={logo}></img>
    </body>
  );
}

export default Page1;
