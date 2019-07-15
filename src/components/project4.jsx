import React from "react";

const Project4 = () => {
  return (
    <div className="project">
      <p className="note">Hover for project links</p>
      <h1>Project #4</h1>
      <h2 className="projectTitle">Pomodoro Timer</h2>
      <p>
        <span>Description: </span>Responsive pomodoro timer application that
        utilizes latest React Hook technology and Context API.
      </p>

      <div className="overlayContent">
        <h1>Pomodoro Timer</h1>
        <pre>
          Made with:
          <br />
          React Hooks, React Context API, SCSS
        </pre>
        <div className="projectOptions">
          <a
            href="https://github.com/tdlile7/pomodoro-timer"
            className="git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git
          </a>
          <a
            href="https://pomodoro-timer-tlilecode.netlify.com/"
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

export default Project4;
