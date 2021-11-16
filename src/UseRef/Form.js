import React, { useEffect, useRef } from "react";

export default function Form() {
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current.focus();
  }, []);
  return (
    <div className="m-32 ">
      <input type="text" placeholder="Text" />
      <br />
      <input
        className=""
        type="text"
        ref={textRef}
        placeholder="Enter Some Text "
      />
      
    </div>
  );
}
