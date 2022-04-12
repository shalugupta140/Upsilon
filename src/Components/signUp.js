import React from "react";
import '../Components/navbar'
import web from "../Components/singup.png";
import { BiShow } from 'react-icons/bi'
import { BsFacebook,BsInstagram } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from "react-router-dom";

const SignUp = () => {

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    return (
        <>
            <div className="main-container">
                <div className="container ">
                    <div className="row">
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-md-6 signup">

                                    <div className="sub-container">
                                        <h1>SIGN UP</h1>
                                        <div className="form-head">
                                            <div class="mb-3">
                                                <label for="InputEmail1" class="form-label"></label>
                                                <input type="email" id="InputEmail1" placeholder="Email"></input>

                                            </div>
                                            <div class="mb-3 pass">
                                                <label for="Password" class="form-label"></label>
                                                <input type="password" id="Password" placeholder="Password"></input>
                                                <span  style={{lineHeight:"3px", marginTop:"3px"}} className="btn"><BiShow /></span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="Confirm Password" class="form-label"></label>
                                                <input type="Password" id="Confirm Password" placeholder="Confirm Password">
                                                </input>
                                                <span style={{lineHeight:"3px", marginBottom:"3px"}} className="btn"><BiShow /></span>
                                            </div>
                                        </div>
                                        <div className=" d-flex">
                                            <div>
                                                <input className="form-check-input" type="checkbox" id="exampleCheck1" />
                                            </div>
                                            <div className="check-text">
                                                <p>I accpet the <span style={{color:"#FF19A3"}}>term and condition</span></p>
                                            </div>
                                        </div>
                                        <div className="form-head">
                                             <button className="cp-btn">Confirm Password</button>
                                        </div>
                                         <div className="d-flex">
                                          <div className="hr1"> <hr/> </div>
                                          <p className="or"> OR</p>
                                          <div className="hr2"><hr/></div>
                                         </div>
                                         <div className="social-media-icon">
                                         <div className="icon">
                                         <FcGoogle/>
                                         </div>
                                         <div className="icon icon-fb ">
                                         <BsFacebook/>
                                         </div>
                                         <div className="icon icon-insta">
                                         <BsInstagram/>
                                         </div>
                                         </div>
                                         <div className="d-flex">
                                         <NavLink style={{color:"#fff", textDecoration:"none", letterSpacing:"0.05em",marginLeft:"168px"}}  to="#">Already a member</NavLink>

                                         <NavLink style={{color:"#FF19A3", textDecoration:"none", letterSpacing:"0.05em"}}to="/signIn"> ? Sign in</NavLink>
                                         </div>
                                       


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
        </>
    )
}

export default SignUp;