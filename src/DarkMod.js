import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Dark_Light() {
  const Dark_Mode = () => {
    settext(text.toUpperCase());
  };
  const Changed = (event) => {
    settext(event.target.value);
  };
  // let Dark={
     
  // }

  const [text, settext] = useState("");
  return (
    <div className="container mb-2">
      <div className="container mb-2"/* style={Dark}*/>
        <div className="mb-3">
          <label /*for="exampleFormControlTextarea1"*/  className="form-label">
            <h2>Text Area</h2>
          </label>
          <textarea
            className="form-control"
            value={text}
            // style={Light}
            onChange={Changed}
            rows="9"
          ></textarea>
        </div>
      </div>
      <button type="button" onClick={Dark_Mode}>
        Dark Mode
      </button>
    </div>
  );
}
export default Dark_Light;
