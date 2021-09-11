import React from "react";
// import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function From(props)
 {
  return (
    <div className="container">
      <div class="mb-3">
        <label /*for="exampleFormControlTextarea1"*/ class="form-label">
           
           <h2>{props.title}</h2>
        </label>
        <textarea
          class="form-control"
        //   id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
    </div>
  );
}
export default From;
