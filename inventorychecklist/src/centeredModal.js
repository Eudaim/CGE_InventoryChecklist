import React, { Component, useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Form,FormText, Row,Col } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './modal.css'
function fakeNetworkRequest () {
  return new Promise ((resolve) => setTimeout(resolve, 1500))
}
function MyVerticallyCenteredModal(props) {
  const [isLoading,setLoading] = useState(false);
   useEffect(() => {
      if(isLoading){
        fakeNetworkRequest().then(()=>{
          setLoading(false);
        });
      }
    }, [isLoading]);

    const  handleClick = () => {
      setLoading(true)
    }
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
          <h2><strong>Device Summary</strong></h2>
          <p>ID: {props.device.device_ID}</p>
          <p>Serial Number: {props.device.device_SerialNum}</p>
          <p>Type: {props.device.device_Type}</p>
          <p>Brand: {props.device.device_Brand}</p>
          <Form>
          <form method="post" action="/inventory">
            <Row className='mb-3'>
              <Form.Group className="mb-3" controlId='formEmail'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>
            <p><strong>Period Of Use:</strong></p>
            <Row>
              <Form.Group as={Col} controlID='period of use'className='mb-3'>
                <Form.Label >To</Form.Label>
                <Form.Control type='date'></Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlID='period of use'className='mb-3'>
                <Form.Label muted>From</Form.Label>
                <Form.Control type='date'></Form.Control>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className='mb-3'>
                <Form.Label>Business Purpose:</Form.Label>
                <Form.Control as="textarea" rows={3}/>
              </Form.Group>
            </Row>
            <div className="d-grid gap-2">
              <Button id="altShownBttn" variant="primary" size="lg"
                type="submit"
                // disabled={isLoading}
                onClick={!isLoading ? handleClick : null}>
                {isLoading ? 'Submitting request...' : 'Submit'}
              </Button>
            </div>
            <Form.Text id="passwordHelpBlock" muted>  
              By Clicking Submit you agree to the following:
            </Form.Text>
            <br />
            <Form.Text id="passwordHelpBlock" muted>  
              1. I certify that the equipment listed above will be used for an offical university pupose and will be returned to the University  as soon as the project is completed.
            </Form.Text>
            <br /> 
            <Form.Text id="passwordHelpBlock" muted>  
              2. I hereby acknowlege receipt of the equipment listed above and accept full responsiliblity for its care a return.
            </Form.Text>
            <br /> 
            <Form.Text id="passwordHelpBlock" muted>  
              3. I agree to reimburse the University for any damage or loss resulting from my negligence.
            </Form.Text>
            </form>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="altShownBttn" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function CenteredModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button id='shownBttn' variant="primary" onClick={() => setModalShow(true)}>
          Checkout
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          device = {props.device}
        />
      </>
    );
  }
  export default CenteredModal