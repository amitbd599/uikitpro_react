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
          <h3>مشروط</h3>
        </div>
        <div className='model-inner'>
          <button
            className='btn-c bg-base text-white'
            onClick={() => controlTopModel(true)}
          >
            إطلاق مشروط
          </button>

          <Modal show={modelTopShow} onHide={() => controlTopModel(false)}>
            <Modal.Header closeButton>
              <Modal.Title>عنوان مشروط</Modal.Title>
            </Modal.Header>
            <Modal.Body>رائع ، أنت تقرأ هذا النص بطريقة مشروطة! </Modal.Body>
            <Modal.Footer>
              <button
                className='btn-c bg-red text-white'
                onClick={() => controlTopModel(false)}
              >
                يغلق
              </button>
              <button
                className='btn-c bg-base text-white'
                onClick={() => controlTopModel(false)}
              >
                احفظ التغييرات
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      {/*=============== Model centered ===============*/}
      <div className='model my-5'>
        <div className='model-centered'>
          <div className='header-text'>
            <h3>توسيط النموذج</h3>
          </div>
          <div className='model-inner'>
            <button
              className='btn-c bg-base text-white'
              onClick={() => controlCenterModel(true)}
            >
              إطلاق مشروطة مركزية
            </button>

            <Modal
              show={modelCenterShow}
              centered
              onHide={() => controlCenterModel(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>عنوان مشروط</Modal.Title>
              </Modal.Header>
              <Modal.Body>رائع ، أنت تقرأ هذا النص بطريقة مشروطة! </Modal.Body>
              <Modal.Footer>
                <button
                  className='btn-c bg-red text-white'
                  onClick={() => controlCenterModel(false)}
                >
                  يغلق
                </button>
                <button
                  className='btn-c bg-base text-white'
                  onClick={() => controlCenterModel(false)}
                >
                  حفظ التغييرات
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
            <h3>حفظ التغييرات</h3>
          </div>
          <div className='model-inner'>
            <button
              className='btn-c bg-base text-white'
              onClick={() => controlInputModel(true)}
            >
              إطلاق مشروطة مركزية
            </button>

            <Modal
              show={modelInputShow}
              onHide={() => controlInputModel(false)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>عنوان مشروط</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label>عنوان البريد الإلكتروني</Form.Label>
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
                    <Form.Label>مثال </Form.Label>
                    <Form.Control as='textarea' rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className='btn-c bg-red text-white'
                  onClick={() => controlInputModel(false)}
                >
                  يغلق
                </button>
                <button
                  className='btn-c bg-base text-white'
                  onClick={() => controlInputModel(false)}
                >
                  حفظ التغييرات
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
