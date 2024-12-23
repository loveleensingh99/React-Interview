"use client";

import React, { useRef } from "react";

const UseRef = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  const handleInput = () => {
    if (myRef.current) {
      const data = myRef.current.value;
      console.log("🚀 ~ handleInput ~ data:", data);
    }
  };
  return (
    <>
      <div>UseRef</div>

      <input ref={myRef} type="text" />

      <button onClick={handleInput}>Click</button>
    </>
  );
};

export default UseRef;


{/* 
// The useRef hook allows you to persist values between renders without triggering a re-render.
Whether you’re dealing with DOM manipulation, storing previous values, or managing timers, useRef is an efficient solution.













*/}