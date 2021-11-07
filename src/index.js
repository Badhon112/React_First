import React from "react";
import ReactDom from "react-dom";
import './index.css'
// import App from './Greek/App';
// import App from "./Sumit/App";
import App from "./Api/App"
function Index() {
  return (
    <div>      
      <App/>
    </div>
  );
}
ReactDom.render(<Index />, document.getElementById("root"));
