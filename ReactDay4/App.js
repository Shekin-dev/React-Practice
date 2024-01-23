import React from "react";
import ReactDOM  from "react-dom/client";


const jsxHeading =(
  <h1 className="head" id="heading">
  </h1>
); 

const RootContainer = () => {
  return (
    <div id="container">
      <p>Hey! What's up?</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootContainer />);