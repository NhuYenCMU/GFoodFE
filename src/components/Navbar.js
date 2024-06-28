import React from 'react';
import { BiColor } from 'react-icons/bi';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " >
      <div className="container-fluid " >
        <a className="navbar-brand "style={{ color: '#b71c1c'}} href="#"> <b>GoFood</b> <i class="fa-solid fa-utensils fa-lg"></i> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-danger" aria-current="page" href="#">Trang Chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-danger" aria-current="page" href="#">Người Dùng</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-danger" aria-current="page" href="#">Quản Trị</a>
            </li>
          </ul>
          <button type="button" className="btn btn-outline-danger me-2" data-bs-toggle="modal"
            data-bs-target="#exampleModal2">Thêm món</button>
          <Link to="/login">
            <button className="btn btn-outline-danger me-2" type="button"  id="loginButton">Login</button>
          </Link>
          <button className="btn btn-outline-danger" type="button" id="">Sign Up</button>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
