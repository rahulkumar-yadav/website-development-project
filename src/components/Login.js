import React from "react";
import gl from "../assets/imgs/SG.png";
import fb from "../assets/imgs/FB.png";
import img from "../assets/imgs/form.png";
import { AiOutlineEye } from "react-icons/ai";
import Google from "./shared/button/Google";
import Facebook from "./shared/button/Facebook";
import Forget from "./shared/button/Forget";
import InputLoginGroup from "./form/InputLoginGroup";

const Login = ({ handleForm }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4> Sign In </h4>
        <p className="mb-0 login_text">
          Don’t have an account yet?
          <span
            className="text-primary px-1 input_toggle"
            onClick={() => handleForm("Register")}
          >
            Create new for free!
          </span>
        </p>
      </div>
      <div class="row gap-4 g-0 ">
        <div class="col ">
          <form className="d-flex flex-column">
            <InputLoginGroup />
            <button className="rounded-pill d-block w-full btn btn-primary my-3 fw-semibold">
              Sign In
            </button>
          </form>
          <Facebook />
          <Google />
          <Forget />
        </div>
        <div class="col ">
          <div className="mb-2">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
