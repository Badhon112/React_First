import React from "react";
import ReactDom from "react-dom";
import './index.css'
// import App from './Greek/App';
// import App from "./Sumit/App";
// import App from "./Api/App"
// import App from "./Hook/App"
// import App from "./UseEffect/App";
// import App from "./CallBackMemo/App";
// import App from "./UseRef/App";
import App from "./UseReducer/App";
function Index() {
  return (
    <div>      
      <App/>
    </div>
  );
}
ReactDom.render(<Index />, document.getElementById("root"));

