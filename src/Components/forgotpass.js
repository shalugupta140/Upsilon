import React from 'react'
import Forgot from "../Components/forgot.jpg";
import{Link} from 'react-router-dom'
import {useState} from 'react';
import { Button } from 'bootstrap';

const Modal =()=> {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (

        <>
        <div className='modalBackground'>
            <div className='modalContainer'>
            <div className='modalClosed'>
            <button> X </button>
            </div>
        
            <div className='text-center mt-5'>
            <Link style={{color:"#fff", textDecoration:"none", letterSpacing:"0.05em",}} to="#"> Forgot Password</Link>
            </div>
            <div className='text-center'>
            <img src={Forgot} className="img-fluid" alt="Common-img" />
            </div>
                <div className='modalTitle'>
                    <div class="mb-3">
                        <label for="InputEmail1" class="form-label"></label>
                        <input type="email" id="InputEmail1" placeholder="Email"></input>
                    </div>
                    </div>
                    <div className="modalBtn">
                        <button className="modal-btn">Send Link</button>
                    </div>
            </div>
        </div>

          {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
</>
    )
}

export default Modal;