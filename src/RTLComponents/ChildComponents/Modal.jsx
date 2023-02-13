import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
const UserModal = () => {
  const [modelTopShow, setModelTopShow] = useState(false);
  const [modelCenterShow, setModelCenterShow] = useState(false);
  const [modelInputShow, setModelInputShow] = useState(false);

  const controlTopModel = (value) => {
    setModelTopShow(value);
  };
  const controlCenterModel = (value) => {
    setModelCenterShow(value);
  };
  const controlInputModel = (value) => {
    setModelInputShow(value);
  };

  return (
    <div className='model'>
      {/* =============== Model Top ===============*/}
      <div className='pd-top-110 model-top'>
        <div className='header-text'>
          <h3>Model Top</h3>
        </div>
        <div className='model-inner'>
          <button
            className='btn-c bg-base text-white'
            onClick={() => controlTopModel(true)}
          >
            Launch demo modal
          </button>

          <Modal show={modelTopShow} onHide={() => controlTopModel(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <button
                className='btn-c bg-red text-white'
                onClick={() => controlTopModel(false)}
              >
                Close
              </button>
              <button
                className='btn-c bg-base text-white'
                onClick={() => controlTopModel(false)}
              >
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      {/*=============== Model centered ===============*/}
      <div className='model my-5'>
        <div className='model-centered'>
          <div className='header-text'>
            <h3>Model Centered</h3>
          </div>
          <div className='model-inner'>
            <button
              className='btn-c bg-base text-white'
              onClick={() => controlCenterModel(true)}
            >
              Launch centered modal
            </button>

            <Modal
              show={modelCenterShow}
              centered
              onHide={() => controlCenterModel(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <button
                  className='btn-c bg-red text-white'
                  onClick={() => controlCenterModel(false)}
                >
                  Close
                </button>
                <button
                  className='btn-c bg-base text-white'
                  onClick={() => controlCenterModel(false)}
                >
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>

      {/*=============== Model Input ===============*/}
      <div className='model my-5'>
        <div className='model-input'>
          <div className='header-text'>
            <h3>Model Input</h3>
          </div>
          <div className='model-inner'>
            <button
              className='btn-c bg-base text-white'
              onClick={() => controlInputModel(true)}
            >
              Launch centered modal
            </button>

            <Modal
              show={modelInputShow}
              onHide={() => controlInputModel(false)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='name@example.com'
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlTextarea1'
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as='textarea' rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className='btn-c bg-red text-white'
                  onClick={() => controlInputModel(false)}
                >
                  Close
                </button>
                <button
                  className='btn-c bg-base text-white'
                  onClick={() => controlInputModel(false)}
                >
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
