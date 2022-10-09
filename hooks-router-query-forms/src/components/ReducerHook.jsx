import React from "react";
import { useReducer } from "react";

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "INCREMENT": 
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state;
    }
}

function ReducerHook() {
  const [state, dispatch] = useReducer(reducerFunction, {count: 0, showText: true});

  return (
    <div>
      {/* useReducer hook accepts a reducer function of type (state, action) => newState, and returns the current state paired with a dispatch method.  */}
      <h4>Using useReducer</h4>
      <h6>{state.count}</h6>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT'})
          dispatch({ type: 'toggleShowText' })
        }}
      >
        Click Me
      </button>
      {state.showText && <p>Hello World</p>}
    </div>
  );
}

export default ReducerHook;
