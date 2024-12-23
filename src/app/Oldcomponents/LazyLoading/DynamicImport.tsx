"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const LazyComp = dynamic(() => import("./LazyComponent"), {
  loading: () => <h1>Loading...</h1>,
});

function LazyDynamicImport() {
  const [shown, setShown] = useState(false);

  return (
    <div style={{ margin: "30px" }}>
      <p> lazy loading in nextjs app</p>
      <button
        style={{
          background: "green",
          color: "white",
        }}
        onClick={() => setShown(!shown)}
      >
        Load Component
      </button>

      {shown && <LazyComp />}
    </div>
  );
}

export default LazyDynamicImport;
