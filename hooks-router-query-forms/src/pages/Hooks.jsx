import React from "react";
import CallbackHook from "../components/CallbackHook";
import ContextHook from "../components/ContextHook";
import ImperativeHandleHook from "../components/ImperativeHandleHook";
import LayoutEffectHook from "../components/LayoutEffectHook";
import MemoHook from "../components/MemoHook";
import ReducerHook from "../components/ReducerHook";
import RefHook from "../components/RefHook";
import StateAndEffectHook from "../components/StateAndEffectHook";

function Hooks() {
  return (
    <div>
      <StateAndEffectHook />
      <RefHook />
      <LayoutEffectHook />
      <MemoHook />
      <CallbackHook />
      <ContextHook />
      <ReducerHook />
      <ImperativeHandleHook />
    </div>
  );
}

export default Hooks;
