import React, { Component, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Form,FormText} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function MyVerticallyCenteredModal(props) {
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
          <Form action="/inventory" method="post">
          <h4>Are you Sure you want to check out?</h4>
          <input type="date" name="start-date"></input>
          <input type="date" name="end-date"></input>
          <input type="text" name="description"></input>
            <Button>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function CenteredModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Checkout
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  export default CenteredModal