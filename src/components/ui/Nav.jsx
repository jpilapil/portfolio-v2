import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  // get current page path name
  const url = window.location.pathname;

  // if the current pathname = /, return className 'nav-active'
  function navActiveOnWork(url) {
    if (url.indexOf("about") < 0 && url.indexOf("contact") < 0) {
      return "nav-active";
    } else return "";
  }

  // if the current pathname = /about, return className 'nav-active'
  function navActiveOnAbout(url) {
    if (url.indexOf("about") > 0) {
      return "nav-active";
    } else return "";
  }

  // if the current pathname = /contact, return className 'nav-active'
  function navActiveOnContact(url) {
    if (url.indexOf("contact") > 0) {
      return "nav-active";
    } else return "";
  }

  return (
    <nav className="navbar navbar-expand-lg nav-90">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${navActiveOnWork(url)}`}>
                WORK
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${navActiveOnAbout(url)}`}>
                ABOUT
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${navActiveOnContact(url)}`}
              >
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
