import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

function Counter(state,action){
  switch(action.type){
    case 'inc':
    return {count: state.count+1}
    default :
    return {count:state}
  }
}

export const UseCallBack = () => {
  const initialState = {count:0}
  const [state,dispatch] = useReducer(Counter,initialState)
  const plus = () => {
    dispatch({type:'inc'})
  }
  return (
   
    <div>
      <h1>{state.count}</h1>
      <button onClick={plus}>+</button>
    </div>
  )
}
