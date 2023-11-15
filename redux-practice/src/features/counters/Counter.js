import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0);
  return (
    <>
    <p>{count}</p>
    <section>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </section>
    </>
  );
};

export default Counter;
