import React, { useState, useCallback } from "react";
import ShowCount from "./ShowCount";
import Title from "./Title";
import Button from "./Button";
export default function App() {
  const [Count1, setCount1] = useState(0);
  const [Count2, setCount2] = useState(0);
  //   const incrementByOne = () => {
  //     setCount1((Count1) => Count1 + 1);
  //   };
  const incrementByOne = useCallback(() => {
    setCount1((Count1) => Count1 + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((Count2) => Count2+5);
  }, []);
  const Check=()=>{
      return Count1%2===0;
  }
  const Check2=()=>{
      return Count2%2===0;
  }

  return (
    <div className="m-32 text-5xl">
      <Title />
      <ShowCount count={Count1} title="Counter 1" />
      <span>
          {Check()?"Even":"Odd"}
      </span>
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <hr />
      <ShowCount count={Count2} title="Counter 2" />
      <span>
          {Check2()?"Even":"Odd"}
      </span>
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </div>
  );
}
