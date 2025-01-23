import React from "react";
import ReactDOM from "react-dom/client";

//React element => object => it's basically an obj when we rendered it becomes html ele

const heading = React.createElement(      //it's contain 3 attribute i>tag name ii>obj which will go as an attribute iii>childern 
    "h1",
    {id:"heading"},
    "My_React"
);

//jsx is not HTML in javascript, it is HTML like syntext 
const jsxheading = <h1 className="head" tabIndex="1">My_React using jsx</h1>

//React component : 2types
//class based component - old
//functional component - new

const HeadingComponent = () => <h1>This is my first react functional component</h1>;


//Render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxheading);

//Render for functional component
root.render(<HeadingComponent/>);

//component compotion : one component render into another component
const FunCom1 = () =>(
  <h1>This is the example of component compotition</h1>  
);

const FunCom2 = () => (
    <div id ="container">
        <FunCom1 />   
        <h1>Here it is</h1>
    </div>
);

const child = ReactDOM.createRoot(document.getElementById("parant"));
child.render(<FunCom2 />);

//we can inject any js code in jsx by using {...}
const FunCom3 = () =>(
    <div id ="abc">
        {
            heading
        }
        <h1>This is the example of component compotition</h1> 
    </div> 
  );
  
