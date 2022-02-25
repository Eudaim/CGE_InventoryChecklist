import React, { Component, useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function HardwareModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Checkout
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Ram: {props.hardware.Ram}</p>
        <p>Storage: {props.hardware.Storage}</p>
        <p>Processor: {props.hardware.Processor}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function Hardware(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        </Button>
        <HardwareModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          hardware = {props.hardware}
        />
      </>
    );
  }
  export default Hardware