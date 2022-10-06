import React, { useState, useEffect } from "react";

function StateAndEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h4>Using useState & useEffect</h4>
      {/* 
          useState is an object that stores data and information about the component, State is changeable but whenever it does the component re-renders 
          UseEffect is used to perform certain operations in the component whenever it renders
        */}
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  );
}

export default StateAndEffectHook;
