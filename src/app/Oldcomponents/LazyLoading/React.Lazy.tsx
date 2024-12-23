"use client";
import React, { useState, Suspense } from "react";

const LazyComp = React.lazy(() => import("./LazyComponent"));

function ReactLazy() {
  const [shown, setShown] = useState(false);

  return (
    <div style={{ margin: "30px" }}>
      <p> GeeksforGeeks lazy loading article in nextjs app</p>
      <button
        style={{ background: "green", color: "white" }}
        onClick={() => setShown(!shown)}
      >
        Load Component
      </button>

      {shown && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <LazyComp />
        </Suspense>
      )}
    </div>
  );
}

export default ReactLazy;
