import React from "react";
import ReactDOM  from "react-dom/client";
import resList from "./utilities/Datas";
import RestaurantCard from "./Src/Restaurantcard";
import Header from "./Src/Header";



const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* restaurant-card */}
        {resList.map((resObj) => (
          <RestaurantCard resData={resObj} />
        ))}
        {/* For each restaurant, it is a function, it is returning a piece of jsx */}
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} /> */}
        {/* <RestaurantCard resData={resObj} /> */}
        {/* <RestaurantCard resName="KFC" cuisine="Chicken, Fast Food" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header /> {/*Component Composition */}
      {/* Body */}
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);