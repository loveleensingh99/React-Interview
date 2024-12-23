import React, { useState, useEffect } from "react";

const Debouncing = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000); // 1000ms delay before updating debounced value

    // Cleanup function to clear the timeout if inputValue changes before 1000ms
    return () => clearTimeout(timer);
  }, [inputValue]); // Effect runs whenever inputValue changes

    

    useEffect(() => {
      const timer=setTimeout


    }, [inputValue])
    
  return (
    <div>
      <h1>Debouncing Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Start typing..."
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default Debouncing;
