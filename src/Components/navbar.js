import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components/navbar.css"
import { AiOutlineSearch } from "react-icons/ai";
const Navbar1 = () => {
  return (
    <div>
      <div className="Container ">
        <div className="row">
          <div col-md-10 mx-auto>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="logo">PSILON</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <div className="search">
                <AiOutlineSearch className ="icons"/>
                 <input class="search-input me-2" type="search" placeholder="Search a course"></input>
                 </div>
                  <ul className="navbar-nav">
           
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/aboutUs">About us</a>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/signIn">Login</NavLink>
                    </li>
                  </ul>
          
                </div>
              </div>
            </nav>
            
          </div>

        </div>
      </div>

    </div>
  );
}

export default Navbar1;