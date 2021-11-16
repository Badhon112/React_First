import React, { useState, useEffect } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // const [text, setText] = useState("");
  const addClick = () => {
    setCount((count) => count + 1);
  };
  useEffect(() => {
    document.title = `You Clicked ${count} Time`;
  }, [count]);

  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    // console.log("Start TIme")
    const Interval = setInterval(tick, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, []);
  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
      You Click {count} Time tz
    </div>
  );
}
