import React, { useReducer } from "react";

import { Reducer } from "react";

const transactionReducer = (state, action) =>{
   switch(action.type){
    case 'WITHDRAW':
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


        
        </>
    )
}