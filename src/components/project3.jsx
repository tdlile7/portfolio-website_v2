import React from "react";

const Project3 = () => {
  return (
    <div className="project">
      <p className="note">Hover for project links</p>
      <h1>Project #3</h1>
      <h2 className="projectTitle">Juicy Buns</h2>
      <p>
        <span>Description: </span>Greatest made-up restaurant in history. This
        project is a responsive website created utilizing React Context API,
        React Hooks, and React Transition Groups.
      </p>

      <div className="overlayContent">
        <h1>Juicy Buns</h1>
        <pre>
          Made with:
          <br />
          React Context API, React Hooks,
          <br />
          React Transition Groups, and SCSS
        </pre>
        <div className="projectOptions">
          <a
            href="https://github.com/tdlile7/juicy-buns"
            className="git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git
          </a>
          <a
            href="https://juicy-buns.netlify.com/"
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

export default Project3;
