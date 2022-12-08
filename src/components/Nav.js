import React, { useContext } from "react";
import { FaUserFriends } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { AuthContext } from "../context/AuthContextProvider";
import Dropdown from "react-bootstrap/Dropdown";

const Nav = ({ setModalShow }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container-xxl py-4">
      <div className="custom_navbar row g-0 py-3 d-none d-md-flex  ">
        <div className="col d-flex align-items-center gap-3 ">
          <a href="/" className="link link_active">
            All Post (32)
          </a>
          <a href="/" className="link">
            Article
          </a>
          <a href="/" className="link">
            Event
          </a>
          <a href="/" className="link">
            Education
          </a>
          <a href="/" className="link">
            Job
          </a>
        </div>
        <div className="d-flex justify-content-end gap-3 col">
          <button className="btn  btn_custom d-flex btn_secondary align-items-center gap-2">
            <span>Write a Post</span>
            <IoMdArrowDropdown />
          </button>
          {user ? (
            <button className="btn btn-outline-secondary btn_custom btn_gray d-flex align-items-center gap-2">
              <BiLogIn className="fs-4" /> <span>Leave Group</span>
            </button>
          ) : (
            <button
              className="btn btn-primary btn_custom d-flex align-items-center gap-2"
              onClick={() => setModalShow(true)}
            >
              <FaUserFriends /> <span>Join Group</span>
            </button>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center  d-md-none">
        <p className="mb-0">Posts (368)</p>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className="btn btn_custom d-flex btn_secondary text-dark"
          >
            Filter : All
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Event</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Education</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Job</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Nav;
