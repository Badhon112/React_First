import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state + 1;
    default:
      return state;
  }
};
export default function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Counter {state}</div>
      <button type="button" onClick={()=>{
          dispatch("Increment")
      }} >Increment</button>
      <button type="button" onClick={()=>{
          dispatch("Decrement")
      }} >Decrement</button>
    </div>
  );
}
