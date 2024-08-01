import React from "react";
import { useReducer } from "react";

const initialState = [
  {
    id:1,
    name:"Learning React"
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      break;
    default:
      return state;
  }
};

export const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h4>Todo App using UseReducer</h4>
       <h4>Task List {state.length}</h4>
    </>
  );
};
