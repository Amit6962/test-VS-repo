import React, { useReducer } from "react";

let initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "DECREMENT":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "INCREMENT2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "DECREMENT2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count={count.firstCounter}</div>
      <div>Second Counter- {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        INCREMENT by 1
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 2 })}>
        INCREMENT by 2
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        INCREMENT by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        DECREMENT
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT2", value: 5 })}>
          INCREMENT by 5
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT2", value: 5 })}>
          DECREMENT Counter 2
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;
