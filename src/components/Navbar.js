import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className ="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className ="navbar-brand" href="/">Clicky Game</a>
        <div className = "white center">
          <h3>
            {props.message}
          </h3>
        </div>
        
        <div className = "white topright">
          <h3>
            Score: {props.score} | TopScore: {props.topscore}
          </h3>
        </div>
    </nav>
    </div>
  )
};

export default Navbar;
