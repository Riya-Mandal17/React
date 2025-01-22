import React from "react";
import ReactDOM from "react-dom/client";

//React element => object => it's basically an obj when we rendered it becomes html ele

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "My_React"
);

//Render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);