import React, { useState, useCallback } from "react";

// Child component
const Child = React.memo(({ handleClick }) => {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click me</button>;
});

// Parent component
const Parent = () => {
  const [count, setCount] = useState(0);

  // Memoizing the function using useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // Empty dependency array, so the function is not recreated on each render

  return (
    <div>
      <Child handleClick={handleClick} />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Parent;
