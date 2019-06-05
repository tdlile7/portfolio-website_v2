import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" class="toggler" />
      <div class="hamburger">
        <div />
      </div>
      <div class="menu">
        <div class="menu-overlay">
          <div class="menu-content">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contactMe">Contact Me</a>
              </li>
              <li>
                <a href="./documents/thomas_lile_resume.pdf" download>
                  Resume
                  <FontAwesomeIcon
                    className="downloadIcon"
                    icon={faFileDownload}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
