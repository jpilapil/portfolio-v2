import React from "react";
import Nav from "./Nav";

// Holds everything that is persistent throughout the app

export default function AppTemplate(props) {
  return (
    <div id="site-border">
      {/* <Nav /> */}
      <div className="container">
        {/* displays everything passed into AppTemplate component */}
        {props.children}
      </div>
    </div>
  );
}
