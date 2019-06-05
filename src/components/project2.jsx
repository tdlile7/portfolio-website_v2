import React from "react";

const Project2 = () => {
  return (
    <div className="project">
      <p className="note">Hover for project links</p>
      <h1>Project #2</h1>
      <h2 className="projectTitle">Portfolio Website V1</h2>
      <p>
        <span>Description: </span>First version of my portfolio website that I
        created and deployed. Utilized pure HTML, CSS, JS, in addition to the
        AOS (Animate of Scroll) plugin for implementation of scroll effects.
      </p>

      <div className="overlayContent">
        <h1>Portfolio Website V1</h1>
        <pre>
          Made with:
          <br />
          Javascript(w/ AOS plugin), CSS, HTML
        </pre>
        <div className="projectOptions">
          <a
            href="https://github.com/tdlile7/portfolio-website_v1"
            className="git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git
          </a>
          <a
            href="https://tlile-portfolio-v1.netlify.com/"
            className="demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project2;
