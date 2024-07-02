import React from "react";
import  ReactDOM  from "react-dom/client";



const heading = React.createElement(
    "div",
    {id:"heading",xyz:"123"},
    "Hello World from React!"
    );


const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("h1",{id:"head1"},"inside heading 1"),
    React.createElement("h2",{id:"head2"},"inside heading 2")]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);