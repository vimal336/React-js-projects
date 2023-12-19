import React, { useReducer } from "react";

import { Reducer } from "react";

const transactionReducer = (state,action) => {
   switch (action.type){
    case 'WITHDRAW':
        return state - action.payload
    case 'DEPOSIT':
            return state - action.payload
   }
}

export default function Reducers(){

    const withdraw = (amount) => {
        dispatch({type:"WITHDRAW",payload:amount})
    }

    const deposite = (amount) => {
        dispatch({type:"DEPOSIT",payload:amount})
    }

    const [state, dispatch] = useReducer(transactionReducer, 1000)
    return(
        <>
       <h3>{`Balance is${state}`}</h3>
       <button onClick={withdraw(500)}></button>

       <button onClick={deposite(500)}></button>
        </>
    )
}