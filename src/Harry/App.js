import React, { useState } from "react";
// import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function From(props) {
const ForUpptype =()=>{
    textForm(text.toUpperCase());
}

const TextChanged=(event)=>{
    textForm(event.target.value);
}
const Delete=(event)=>{
    textForm("");
}

  const [text, textForm] = useState("");
  return (
      <div className="jumbotron">
    <div className="container">
      <div class="mb-5">
        <label /*for="exampleFormControlTextarea1"*/ class="form-label">
          <h2>{props.title}</h2>
        </label>
        <textarea
          class="form-control"
          //   id="exampleFormControlTextarea1"
          onChange={TextChanged}
          value={text}
          rows="8"
        ></textarea>
        <button type="button" className="btn btn-primary" onClick={ForUpptype}>
          Uppercase
        </button>
        <button type="button" className="btn btn-primary" onClick={Delete}>
          Delete
        </button>
        <p>{text}</p>
      </div>
    </div>
    </div>
  );
}
export default From;
