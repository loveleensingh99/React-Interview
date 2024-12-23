import React, { useMemo } from "react";
import { useState } from "react";
const UseMemo = () => {
  const [count, setcount] = useState(0);
  const [input, setInput] = useState(1);


  const expensiveCalc = useMemo(() => {
    console.log("Expensive Calculation");
    for (let i = 0; i < 10000000; i++) { }
    return input * 2;
  }, [input]);

  let Multiply = expensiveCalc;

  return (
    <>
      Count{count + 1}
      <button onClick={() => setcount(count + 1)}>Increase Conter</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      Multiply by two:{Multiply}
    </>
  );
};
export default UseMemo;


{/* 

useMemo is a React Hook used to memoize the result of a computation (a function or an expensive operation).
It is primarily used to optimize performance by avoiding unnecessary recalculations on every render when the input values haven’t changed.


Performance Optimization: By memoizing expensive function results, useMemo() reduces unnecessary re-renders and computations, thereby improving overall application performance.
Preventing Unnecessary Work: useMemo() ensures that expensive computations are only performed when necessary, optimizing the utilization of resources and reducing unnecessary work.
*/}
