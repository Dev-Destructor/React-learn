import React, { useRef } from "react";

function RefHook() {
  const inputRef = useRef(null);

  const changeRef = () => {
    window.alert(inputRef.current.value);
  };
  return (
    <div>
      <h4>Using useRef</h4>
      {/* useRef hook is similar to  useState but instead of rendering the page every time the value changes, it only changes the value without rendering the whole dom by accessing individual element inside the dom */}
      <input type="text" placeholder="Write Here" ref={inputRef} />
      <button onClick={changeRef}>Submit</button>
    </div>
  );
}

export default RefHook;
