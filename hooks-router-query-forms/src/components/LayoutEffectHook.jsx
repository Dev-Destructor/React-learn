import React, { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";

function LayoutEffectHook() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Bye";
  }, []);

  const onChange = () => {
    console.log(inputRef.current.value);
  }

  // As you can see here, useEffect will change the reference value after whenever the page renders and the the output will change to Bye. But in case of useLayoutEffect, it will be called at an early stage of page render, so it will print Hello before the useEffect is called.  
  return (
    <div>
      {/* useLayoutEffect is similar to useEffect but it is fundamentally called in an earlier stage of when the page renders where useEffect is called after the page renders */}
      <h4>Using useLayoutEffect</h4>
      <input type="text" value="Hello" onChange={onChange} ref={inputRef} />
    </div>
  );
}

export default LayoutEffectHook;
