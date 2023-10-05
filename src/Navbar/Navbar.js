import React from 'react'

import {Link}  from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/home">Home</Link>
            </li>

            <li class="nav-item">
              <Link to="/cart">Cart</Link>
            </li>
            <li class="nav-item">
              <Link to="/products">Products</Link>
            </li>
            <li class="nav-item">
              <Link to="/favorites">Favorites</Link>
            </li>
            <li class="nav-item">
              <Link to="/about">About</Link>
            </li>

            <li class="nav-item">
              <Link to="/signup">SignUp</Link>
            </li>

            <li class="nav-item">
              <Link to="/signin">SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
