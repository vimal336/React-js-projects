import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {
  return (
   <section>
    <p>{count}</p>
   </section>
  )
}

export default Counter
