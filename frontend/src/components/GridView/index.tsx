import React from "react";
import "./styles.css";

function GridView({ children }: any): JSX.Element {
  return (
    <React.Fragment>
      <div className="grid-container">{children}</div>
    </React.Fragment>
  );
}

export default GridView;
