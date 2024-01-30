import React from "react";
import ReactDOM  from "react-dom/client";
import './style.css'; 

const jsxHeading =(
  <h1 className="head" id="heading">
  </h1>
); 

const RootContainer = () => {
  return (
    <div id="container" className="style">
      <p>Hey! What's up?</p>
      <header>
        <div class="logo">
           
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    </div>
  );
}

const HeadingComponent = () => {
  return (
    <h1 className="head" id="heading"> 
      React using jsx
      </h1>
  );
}

const Title = () => <h1>Title</h1>;
const title2 = <h1>Title 2</h1>;

const HeadingComponent2 = () => (
  <div>
    {2 + 6}
    {title2}
    <Title />
    <h1 className="head" id="heading">
      React using jsx
    </h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootContainer />);