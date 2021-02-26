import React from "react";

import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark sticky-top ">
        <a className="navbar-brand">
          We are <strong style={{ color: "yellow" }}>Sorakopatas.</strong>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
