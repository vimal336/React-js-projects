import React from "react";
import { useReducer } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TASK":
        return [...state, {id: state.length + 1, name: action.payload}];
    case "DELETE_TASK":
            return state.filter((task)=>task.id!== action.payload);
    default:
      return state;
  }
};

export const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (e) =>{
    if(e.key === "Enter"){
        dispatch({type:"ADD_TASK", payload: e.target.value});
    }
  };

  const deleteTask = (id) =>{
        dispatch({type:"DELETE_TASK", payload: id});
  };

  return (
    <>
      <h4>Todo App using UseReducer</h4>
       <h4>Task List {state.length}</h4>
       <label htmlFor="task">Enter Task</label>
       <input type="text" id="task" onKeyDown={(e)=> addTask(e)} />
       <ul>
        {state.map((todo) => (
            <li key={todo.id}>{todo.name}
            <button onClick={()=>deleteTask(todo.id)}>Delete</button> </li>
        ))}
       </ul>
    </>
  );
};
