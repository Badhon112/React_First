import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count {state}</div>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
        type="button"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("Decrement");
        }}
        type="button"
      >
        Decrement
      </button>
    </div>
  );
}
