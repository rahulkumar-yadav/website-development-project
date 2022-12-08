import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const InputLoginGroup = () => {
  return (
    <div class="form border rounded ">
      <li class="list-group-item form_input ">
        <input type="email" placeholder="Email" />
      </li>
      <li class="list-group-item form_input d-flex align-items-center">
        <input type="password" placeholder="Password" />
        <AiOutlineEye />
      </li>
    </div>
  );
};

export default InputLoginGroup;
