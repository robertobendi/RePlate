import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navigation.module.css";
import css from "./Pages.module.css";


function Page1() {
  return (
    <body className={css.body}>
      <h1>Page1</h1>
    </body>
  );
}

export default Page1;
