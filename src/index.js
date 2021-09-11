import React from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import From from './App.js';
function Hi(){
  return(
    <div>
      <From title="Text Form"/>
    </div>

  );
};
ReactDom.render(<Hi/>,document.getElementById("root"));