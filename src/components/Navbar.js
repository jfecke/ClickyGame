import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className ="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className ="navbar-brand" href="/">Navbar</a>
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
