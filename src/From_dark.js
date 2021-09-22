import Alert from "./Alert";
import React, { useState } from "react";
// import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function From(props) {
  const [text, textForm] = useState("");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const ForUpptype = () => {
    textForm(text.toUpperCase());
    showAlert("Your Text is in Uppercase")
  };
  
  const TextChanged = (event) => {
    textForm(event.target.value);
  };
  const Delete = (event) => {
    textForm("");
    showAlert(null)
  };
  
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="mb-5">
          <label /*for="exampleFormControlTextarea1"*/ className="form-label">
            <h2>{props.title}</h2>
          </label>
          <Alert alert={alert}/>
          <textarea
            className="form-control"
            //   id="exampleFormControlTextarea1"
            onChange={TextChanged}
            value={text}
            rows="8"
          ></textarea>
          <button
            type="button"
            className="btn btn-primary my-4"
            onClick={ForUpptype}
          >
            Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary my-4"
            onClick={Delete}
          >
            Delete
          </button>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
export default From;
