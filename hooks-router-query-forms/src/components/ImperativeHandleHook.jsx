import React, { useRef } from "react";
import ChildImperativeHandle from "./ChildImperativeHandle";

function ImperativeHandleHook() {
  const clickRef = useRef(null);
  return (
    <div>
      {/* useImperativeHandle hook allows to define function using the ref that can be called by using that ref */}
      <h4>Using useImperativeHandle</h4>
      <button
        onClick={() => {
          clickRef.current.alterToggle();
        }}
      >
        Button from Parent
      </button>
      <ChildImperativeHandle ref={clickRef} />
    </div>
  );
}

export default ImperativeHandleHook;
