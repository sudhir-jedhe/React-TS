import React, { useState, useEffect } from "react";
function Child() {
  console.log("body");
  useEffect(() => {
    console.log("Component Mount  Child effect");
    return () => {
      console.log("Child Componet Unmount");
    };
  }, []);
  return <div>Child</div>;
}

export default Child;
