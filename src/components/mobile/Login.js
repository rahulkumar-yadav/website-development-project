import React from "react";
import Modal from "react-bootstrap/Modal";
import InputLoginGroup from "../form/InputLoginGroup";
import Facebook from "../shared/button/Facebook";
import Google from "../shared/button/Google";

const Login = ({ handleForm }) => {
  return (
    <>
      <Modal.Header closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome back!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="col ">
          <form className="d-flex flex-column">
            <InputLoginGroup />
            <div className="d-flex align-items-center justify-content-between">
              <button className="rounded-pill d-block w-full btn btn-primary profile_name my-3 px-5 fw-semibold">
                Sign In
              </button>
              <p
                className="m-0 underline profile_name"
                onClick={() => handleForm("Register")}
              >
                or, Create Account
              </p>
            </div>
          </form>
          <Facebook />
          <Google />
          <div className="d-flex justify-content-center mb-5 mt-2  login_text ">
            <button className="btn profile_name ">Forget Password</button>
          </div>
        </div>
      </Modal.Body>
    </>
  );
};

export default Login;
