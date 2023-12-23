import React from "react";
import { useReducer } from "react";

const transactionReducer = (state,action) => {
    switch(action.type) {
        case 'WITHDRAW':
        return state - action.payload
    }
}

export default function Reducers(){

    const withdraw = (amount) => {
        dispatch({type:'DEPOSIT', payload:amount})
    }

    const deposit = (amount) => {
        dispatch({type:'DEPOSIT', payload:amount})
    }

    const[state, dispatch] = useReducer
    return(
        <>
          
        </>
    )
}