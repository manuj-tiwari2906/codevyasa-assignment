import React from "react";
import StaggredBars from '../icons/bars-staggered.svg';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a id="logo-text" class="navbar-brand" href="#">
          furni.shop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center column-gap-20">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <form class="d-flex" role="search">
          <div className="side-icons">
            <i className="fas fa-search" style={{ marginLeft: "10px" }}></i>
            <img src={StaggredBars} />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
