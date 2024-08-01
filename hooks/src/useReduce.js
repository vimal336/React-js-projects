import { useReducer } from "react";

import React from "react";

const initialState = { count: 0 };

function Counter(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const  UseReduce = () => {
  const [state, dispatch] = useReducer(Counter, initialState);

  return (
    <div>
      <p>UseReducer Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}