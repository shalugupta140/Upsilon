import React from "react";
import web from "../Components/singup.png";
import { BiShow } from 'react-icons/bi'
import { BsFacebook,BsInstagram } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from "react-router-dom";

const Common = (props)=>{
    return(

        <>
             <div className="main-container">
                <div className="container ">
                    <div className="row">
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-md-6 signup">

                                    <div className="sub-container">
                                        <h1>{props.Name}</h1>
                                        <div className="form-head">
                                            <div class="mb-3">
                                                <label for="InputEmail1" class="form-label"></label>
                                                <input type="email" id="InputEmail1" placeholder="Email"></input>

                                            </div>
                                            <div class="mb-3 pass">
                                                <label for="Password" class="form-label"></label>
                                                <input type="password" id="Password" placeholder="Password"></input>
                                                <span className="btn"><BiShow /></span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="Confirm Password" class="form-label"></label>
                                                <input type="Password" id="Confirm Password" placeholder="Confirm Password">
                                                </input>
                                                <span className="btn"><BiShow /></span>
                                            </div>
                                        </div>
                                        <div className=" d-flex">
                                            <div>
                                                <input className="form-check-input" type="checkbox" id="exampleCheck1" />
                                            </div>
                                            <div className="check-text">
                                                <p>{props.check} <span style={{color:"#FF19A3"}}>{props.check1}</span></p>
                                            </div>
                                        </div>
                                        <div className="form-head">
                                             <button className="cp-btn">{props.btn}</button>
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

                                         <div className="d-flex link-up ">
                                         <NavLink style={{color:"#fff"}} to="#">{props.link}</NavLink>
                                         <NavLink style={{color:"#FF19A3", marginLeft:"5"}}to="#"> {props.link1}</NavLink>
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
export default Common;