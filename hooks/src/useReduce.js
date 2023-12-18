import React, { useReducer } from "react";

import { Reducer } from "react";

const transactionReducer = (state, action) =>{

}

export default function Reducers(){

    const withdraw = (amount) => {
        dispatch({type:"WITHDRAW",payload:amount})
    }

    const withdraw = (amount) => {
        dispatch({type:"WITHDRAW",payload:amount})
    }

    const [state, dispatch] = useReducer(transactionReducer, 1000)
    return(
        <>


        
        </>
    )
}