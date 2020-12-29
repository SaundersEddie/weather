// Modal for the about screen

import React, { useState } from 'react';
import {
    Button,
    Modal
} from 'react-bootstrap';

const WeatherModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="link" onClick={handleShow}>
          About
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>About React-Bootstrap Weather</Modal.Title>
          </Modal.Header>
          <Modal.Body>React Boot Strap Weather V1.0 Coded by Eddie Saunders</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default WeatherModal;
