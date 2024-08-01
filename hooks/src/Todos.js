import React from "react";
import { useReducer } from "react";



const initialState = [];

 const reducer = (state,action) =>{

 }

export const Todos = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return(
        <>
        <h4>Todo App using UseReducer</h4>
        </>
    )

}