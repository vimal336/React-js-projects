import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter)
  return (
   <section>
    <p>{count}</p>
   </section>
  )
}

export default Counter
