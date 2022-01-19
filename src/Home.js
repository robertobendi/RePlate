import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./Navigation.module.css";
import css from "./Pages.module.css";

//demo content
import logo from "./img/logo.png";

function Home() {
  return (
    <body className={css.body}>
      <div className={css.center}>
        <h1>Welcome to RePlate!</h1>
        <img src={logo} className={css.logo}></img>
        <p>
          RePlate is a minimal Ready-to-use
          react.js template<br/>
          provided with working routing and a simple navbar and footer.<br/>
          RePlate was created as a simple starting point for all projects,<br/>
          intended to save the usual time put into creating a simple layout for your apps<br/>
          by providing a simple and modular template, easy to modify and well organized.<br/>
        </p>
      </div>
    </body>
  );
}

export default Home;
