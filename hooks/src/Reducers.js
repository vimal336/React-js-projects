import React from "react";
import { useReducer } from "react";

const transactionReducer = (state,action) => {
    switch(action.type) {
       case 'WITHDRAW':
            return state - action.payload
       case  'DEPOSIT'
            return state - action.payload
       default:
            return state
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