import React from "react";
// import ImperativeHandleHook from "./components/ImperativeHandleHook";
import LayoutEffectHook from "./components/LayoutEffectHook";
import MemoHook from "./components/MemoHook";
import RefHook from "./components/RefHook";
import StateAndEffectHook from "./components/StateAndEffectHook";

function App() {
  return (
    <div className="App">
      <StateAndEffectHook />
      <RefHook />
      <LayoutEffectHook />
      {/* <ImperativeHandleHook /> */}
      <MemoHook />
    </div>
  );
}

export default App;
