import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar1 from './Components/navbar';
import {BrowserReact as Router , Route, Routes, Switch, Link} from "react-router-dom"
import Login from "./Components/login";
import About from "./Components/about";
// import SignUp from "./Components/signup";
import SignIN from "./Components/sign_in";
import SignUp from "./Components/login";
import Modal from "./Components/forgotpass";


function App() {
  return (
    <div>
      <Navbar1/>

      <Routes>
       <Route path="" element= {<SignUp />} />
        <Route path="About" element= {<About />} />
        <Route path="login" element= {<SignUp />} />
        <Route path="Modal" element= {<Modal />} />
        <Route path="sign_in" element= {<SignIN />} />
      </Routes>


    </div>
  );
}

export default App;
