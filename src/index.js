import React from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App2 from "./App2";
// import From from './App.js';
// import Light from "./DarkMod";
import From_dark from "./From_dark.js";
function Hi() {
  return (
    <div>
      {/* <Light/> */}
      {/* <From title="Text Form"/> */}
      {/* <From_dark title="A From" /> */}
      <App2/>
    </div>
  );
}
ReactDom.render(<Hi />, document.getElementById("root"));
