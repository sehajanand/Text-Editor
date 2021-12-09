import React from "react";
import "./Navbar.css";
export default function Navbar() {
  function deleteallnotes() {
    localStorage.clear();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Text Editor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/notes">
              Notes
            </a>
            <a className="nav-link" href="/notes" onClick={deleteallnotes}>
              Delete All Notes
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
