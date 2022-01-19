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
        {/* BACKGROUND CONTAINER */}

        <div className={css.backgrounddiv}>
          <div className={css.container}>
            <h1>Welcome to RePlate!</h1>
            <img src={logo} className={css.logo}></img>
            <h1>version 0.2</h1>
          </div>
        </div>

        {/* TEXT CONTAINER */}

        <div className={css.container}>
          <p>
            RePlate is a minimal Ready-to-use react.js template
            <br />
            provided with working routing and a simple navbar and footer.
            <br />
            RePlate was created as a simple starting point for all projects,
            <br />
            intended to save the usual time put into creating a simple layout
            for your apps
            <br />
            by providing a simple and modular template, easy to modify and well
            organized.
            <br />
            <br />
          </p>
          <h2>Current features:</h2>
          <ul>
            <li>Bootstrap CSS</li>
            <li>Modular page CSS</li>
            <li>React-router-dom</li>
            <li>
              Navbar & footer
              <br />
              <br />
            </li>
          </ul>
          <div className={css.card}>
            <h2>UI Components:</h2>
            <ul>
              <li>
                css.button <br />
                <button className={css.button}>button</button>
              </li>
              <li>
                css.buttonwhite <br />
                <button className={css.buttonwhite}>buttonwhite</button>
              </li>
              <li>
                css.input <br />
                <input className={css.input}></input>
              </li>
              <li>
              css.card <br />
              (this card :P)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
