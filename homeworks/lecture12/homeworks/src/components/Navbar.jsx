import React from "react";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <div className="navbar-nav mr-auto">
          <div className="nav-item">
            <a className="nav-link active" href="/login">
              <i className="bi bi-person"></i> Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
