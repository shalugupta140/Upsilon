import React, { useState } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import web from "../Components/sign-in.jpg";
import { Modal} from "react-bootstrap";
import Forgot from "../Components/forgot.jpg";


const SignIn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
      <div className="main-container">
        <div className="container ">
          <div className="row">
            <div className="mt-3">
              <div className="row">
                <div className="col-md-6 signup">
                  <div className="sub-container">
                    <h1>SIGN IN</h1>
                    <div className="form-head">
                      <div class="mb-3">
                        <label for="InputEmail1" class="form-label"></label>
                        <input
                          type="email"
                          id="InputEmail1"
                          placeholder="Email"
                        ></input>
                      </div>
                      <div class=" mb-3 pass">
                        <label for="Password" class="form-label"></label>
                        <input
                          type="password"
                          id="Password"
                          placeholder="Password"
                        ></input>
                      </div>
                    </div>

                    <div className="d-flex">
                      <div>
                        <input
                          className="form-check-input-signin"
                          type="checkbox"
                          id="exampleCheck1"
                        />
                      </div>
                      <div className="check-text-signin">
                        <p> Remember me </p>
                      </div>
                    </div>
                    <div className="form-head">
                      <button type="submit" className="cp-btn">
                        SIGN IN
                      </button>
                    </div>
                    <div className="d-flex">
                      <div className="hr1" style={{ color: "#FFF" }}>
                        {" "}
                        <hr />{" "}
                      </div>
                      <p className="or"> OR</p>
                      <div className="hr2">
                        <hr />
                      </div>
                    </div>
                    <div className="social-media-icon">
                      <div className="icon">
                        <FcGoogle />
                      </div>
                      <div className="icon icon-fb ">
                        <BsFacebook />
                      </div>
                      <div className="icon icon-insta">
                        <BsInstagram />
                      </div>
                    </div>

                    <div className="d-flex">
                      <NavLink
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          letterSpacing: "0.05em",
                          marginLeft: "170px",
                        }}
                        to="#"
                      >
                        {" "}
                        New here{" "}
                      </NavLink>

                      <NavLink
                        style={{
                          color: "#FF19A3",
                          textDecoration: "none",
                          letterSpacing: "0.05em",
                        }}
                        to="/signUp"
                      >
                        {" "}
                        ? Create an Account
                      </NavLink>
                    </div>

                    <div className="text-center"> <a onClick={handleShow} style={{cursor:'pointer'}}>Forgot Password ?</a></div>
                  </div>
                </div>

                <div className="col-md-6 signup-part2">
                  <div className="sub-container2">
                    <img src={web} className="img-fluid" alt="Common-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      {/* modal form */}

      <Modal show={show} onHide={handleClose} style={{border:"#262626", outline:"#262626"}}>
        <Modal.Header closeButton style={{background:"#262626", border:"#262626",  outline:"#262626"}}>
          {/* <Modal.Title>Forgot Password</Modal.Title> */}
        </Modal.Header>
        <Modal.Body style={{background:"#262626"}} >
          <div className="text-center">
            <img  src={Forgot} className="img-fluid" alt="Common-img" />
          </div>
          <div className="modalTitle mb-3">
          <label for="InputEmail1" class="form-label"></label>
              <input type="email" id="InputEmail1" placeholder="Email"></input>
          </div>

           
          <div className="modalBtn">
            <button className="modal-btn">Send Link</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignIn;

