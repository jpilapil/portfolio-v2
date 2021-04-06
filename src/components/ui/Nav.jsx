import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg nav-90">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                WORK
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                ABOUT
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
