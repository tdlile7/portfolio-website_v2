import React from "react";

const Project1 = () => {
  return (
    <div className="project">
      <p className="note">Hover for project links</p>
      <h1>Project #1</h1>
      <h2 className="projectTitle">React Workout Logger</h2>
      <p>
        <span>Description: </span>Online planner that allows users to save and
        record workout data to track progress overtime in the gym.
      </p>
      <p>
        To view pre-seeded data, use the following pseudo user account:
        <pre>
          email: john1234@gmail.com
          <br />
          password: 12345
        </pre>
      </p>

      <div className="overlayContent">
        <h1>React Workout Logger</h1>
        <pre>
          Made with:
          <br />
          React,Node,Express,MongoDB
        </pre>
        <div className="projectOptions">
          <a
            href="https://github.com/tdlile7/react-workout-logger"
            className="git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git
          </a>
          <a
            href="https://react-workout-logger.herokuapp.com/"
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

export default Project1;
