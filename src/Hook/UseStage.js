import React, { useState } from "react";

export default function UseStage() {
  const [count, setcount] = useState(0);
  function Decrement() {
    setcount(count - 1);
  }
  function Increment(){
      setcount(count+1)
  }
  return (
    <div>
      <button onClick={Decrement}>-</button>
      <samp>{count}</samp>
      <button onClick={Increment} >+</button>
    </div>
  );
}
