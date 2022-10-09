import React, { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

function CallbackHook() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const addNewTodo = useCallback(() => {
    console.log("handleTodo called");
  }, []);

  // Here as we can see if we use a regular function will cause re-render to the child every time the parent re-renders. But by using useCallback, the child will only render when the dependencies of the parent associated to the child changes
  return (
    <div>
      {/* Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. */}
      <h4>Using useCallback</h4>
      <ChildCallback todo={todo} addNewTodo={addNewTodo} />
      <button onClick={handleIncrement}>Click Me</button>
      <h5>The count value is {count}</h5>
    </div>
  );
}

export default CallbackHook;
