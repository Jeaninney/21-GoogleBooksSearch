import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
			style={{ height: 50, clear: "both", paddingTop: 20, textAlign: "center"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
