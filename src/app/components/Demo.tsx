import React, { useState, useEffect } from "react";

function Parent() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("Parent effect");
    return () => console.log("Parent cleanup");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>Toggle Child</button>
      {toggle && <Child />}
    </div>
  );
}

function Child() {
  useEffect(() => {
    console.log("Child mounted");
    return () => console.log("Child cleanup");
  }, []);

  return <p>Child component</p>;
}

export default Parent;
