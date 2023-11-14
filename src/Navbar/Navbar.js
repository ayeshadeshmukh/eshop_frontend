import React from 'react'

import {Link}  from "react-router-dom";
import "../css/newCart.css"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand" href="#">
            <i class="fa-solid fa-shop me-2"></i> <strong>E-Commerce</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div class="input-group">
              <span class="border-warning input-group-text bg-warning text-white">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                class="form-control border-warning"
                style={{ color: "#7a7a7a" }}
              />
              <button class="btn  text-black">Search</button>
            </div>
          </div>
          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <div class="ms-auto d-none d-lg-block">
              <div class="input-group">
                <span class="border-black input-group-text bg-white text-black">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  class="form-control border-black"
                  style={{ color: "#7a7a7a" }}
                />
                <button class="btn border-black  text-black">Search</button>
              </div>
            </div>
            <ul class="navbar-nav ms-auto ">
              <li class="nav-link mx-2 text-uppercase">
                <Link to="/home" className="nav-link-black">
                  Home
                </Link>
              </li>

              <li class="nav-link mx-2 text-uppercase">
                <Link to="/products" className="nav-link-black">
                  Products
                </Link>
              </li>
              <li class="nav-link mx-2 text-uppercase">
                <Link to="/signup" className="nav-link-black">
                  SignUp
                </Link>
              </li>

              <li class="nav-link mx-2 text-uppercase">
                <Link to="/signin" className="nav-link-black">
                  SignIn
                </Link>
              </li>
              <li class="nav-link mx-2 text-uppercase">
                <Link to="/about" className="nav-link-black">
                  About
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto ">
              <li class="nav-link mx-2 text-uppercase">
                <Link to="/cart" className="nav-link-black">
                  Cart
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-2 text-uppercase" href="#">
                  <i
                    class="fa-solid fa-circle-user me-1"
                    className="nav-link-black"
                  ></i>{" "}
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
