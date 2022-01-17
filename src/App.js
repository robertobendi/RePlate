import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Page1 from "./Page1";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
