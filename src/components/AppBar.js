import React, { useState } from "react";
import Link from "../Link";

import "./styles/AppBar.scss";

const AppBar = (index) => {
  const [activeTab, setActivetab] = useState(null);
  const active = index === activeTab ? "active" : "";
  const onTabClick = (Link) => {
    console.log("index");
    setActivetab(index);
  };
  return (
    <div className="section-appbar">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand ${active}`}
            onClick={() => onTabClick(index)}
            href="/"
          >
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${active}`}
                  onClick={() => onTabClick(index)}
                  aria-current="page"
                  href="/"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" href="/skills">
                  Skills/Tools
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/experience">
                  Experience
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
