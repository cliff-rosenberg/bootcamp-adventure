import React from "react";
import Jumbotron from "../components/Jumbotron";

// this page is the "404 Not Found" page for the application
const NoMatch = () => {
  return (
    <div>
      {/* loads the 'Jumbotron' component as a container */}
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
