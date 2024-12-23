// #Differences Between useEffect and useLayoutEffect:

// Execution Timing:
// useEffect: Runs after the DOM is updated and painted on the screen and it is called asynchronously.
// useLayoutEffect: Runs synchronously after DOM mutations, but before the browser paints the changes.

// When to Use:
// useEffect: For tasks like data fetching, setting up subscriptions, or side effects that don’t affect layout.
// useLayoutEffect: For tasks that need to read or adjust layout (e.g., measuring DOM elements) before the browser paints.

// Performance:
// useEffect: Non-blocking and does not affect layout, better for performance.
// useLayoutEffect: Synchronous, blocking the paint operation, and may cause performance issues (layout thrashing).

// Common Use Cases:
// useEffect: Fetching data, setting event listeners, or triggering async tasks.
// useLayoutEffect: Reading and adjusting layout, like measuring elements or adjusting scroll position before render.

import { useState, useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const [message, setMessage] = useState("");
  const elementRef = useRef(null);

  // useLayoutEffect: Runs before the browser paints, measuring the element's width
  useLayoutEffect(() => {
    const element = elementRef.current;
    if (element) {
      setWidth(element.offsetWidth); // Get the width of the element
    }
  }, []);

  useEffect(() => {
    setMessage("Component has mounted and width has been measured!");
  }, []); // Runs once after the component mounts

  return (
    <div>
      <div
        ref={elementRef}
        style={{ width: "300px", backgroundColor: "lightblue" }}
      >
        This element's width is: {width}px
      </div>
      <p>{message}</p>
    </div>
  );
}

export default LayoutEffectExample;

// #Code Splitting in React
// What is Code Splitting?

// Code splitting is a technique where JavaScript code is broken into smaller bundles that are loaded on demand.
// It reduces the initial load time by loading only the required code for the page or feature the user interacts with.


// How Code Splitting Works in React:
// React.lazy(): Dynamically imports components to load only when needed.

// Suspense: Handles loading states, such as showing a loading spinner while waiting for a component to load.


// Benefits of Code Splitting in React:
// Improved Performance:

// Reduced Initial Load Time: Only necessary JavaScript is loaded, speeding up the initial load.
// Lazy Loading: Components are loaded only when required.
// Smaller Bundle Sizes:

// Breaks up code into smaller chunks, so users download only the required code for the current page.
// Better User Experience:

// Progressive loading of the app, showing parts of the page immediately while the rest continues to load.
// Async loading of resources with React.lazy() and Suspense to display loading states.
// Reduced Bandwidth Usage:

// Users download only the code required for the feature they’re using, saving bandwidth.
// Dynamic Importing:

// Parts of the app are loaded only when necessary, optimizing performance.
