import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navigation.module.css";
import css from "./Pages.module.css";

function Home() {
  return (
    <body className={css.body}>
      <h1>Home</h1>
    </body>
  );
}

export default Home;
