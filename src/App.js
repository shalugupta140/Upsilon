import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar1 from './Components/navbar';
import {BrowserReact as Router , Route, Routes} from "react-router-dom"
import About from "./Components/about";
import SignIn from "./Components/signIn";
import SignUp from "./Components/signUp";


function App() {
  return (
    <div>
      <Navbar1/>

      <Routes>
       <Route path="" element= {<SignIn/>} />
        <Route path="aboutUs" element= {<About/>} />
        <Route path="signUp" element= {<SignUp/>} />
        <Route path="signIn" element= {<SignIn />} />
      </Routes>


    </div>
  );
}

export default App;
