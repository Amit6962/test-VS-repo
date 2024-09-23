import React, { useReducer } from "react";

let initialCounter = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialCounter;
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [count, dispatch] = useReducer(reducer, initialCounter);
  return (
    <div>
      <div>Count- {count}</div>
      <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
      <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
      <button onClick={() => dispatch("RESET")}>RESET</button>
    </div>
  );
};

export default UseReducerExample;
