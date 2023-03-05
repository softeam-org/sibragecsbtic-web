import React from "react";

function Container({ color, children }) {
  return (
    <div className={`w-100 bg-${color} py-10 md:py-20 px-3 `}>
      <div className="max-w-6xl mx-auto">
        { children }
      </div>
    </div>
  );
}

export default Container;
