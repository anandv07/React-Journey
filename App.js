import React from "react";
import  ReactDOM  from "react-dom/client";

// React Element
const jsxheading = <h1 id="heading">
    JSX React
    </h1>;
 


// Functional Components
const HeadingComponent = () =>{
    return (
        <>
        {jsxheading}
        <Title/>
        <h1>Inside Heading Component</h1>
        </>
    );
    }
const Title = () => {
    return (
        <h1>Inside Title Component</h1>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);