import React, { useReducer } from "react";

// Define the initial state
const initialState = {
  name: "",
  email: "",
  age: "",
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const MultiFieldForm = () => {
  // Initialize useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", state);
  };
  return (
    <div>
      MultiFieldForm
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            value={state.age}
            onChange={(e) =>
              dispatch({ type: "SET_AGE", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: "RESET" })}>
          RESET
        </button>
      </form>
      <div>
        Form data::::::::::::::::::
        <div>Name: {state.name}</div>
        <div>Age: {state.age}</div>
        <div>Email: {state.email}</div>
      </div>
    </div>
  );
};

export default MultiFieldForm;
