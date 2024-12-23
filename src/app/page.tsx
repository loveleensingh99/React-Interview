"use client";

import Debouncing from "./Oldcomponents/Debouncing";
import LazyDynamicImport from "./Oldcomponents/LazyLoading/DynamicImport";
import LazyLoadingFile from "./Oldcomponents/LazyLoading/DynamicImport";
import ReactLazy from "./Oldcomponents/LazyLoading/React.Lazy";
import Parent from "./components/Demo";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Debouncing /> */}

      <ReactLazy />
    </div>
  );
}
