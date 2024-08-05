import React from 'react'
import { useState } from 'react'

export const UseStateHook = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h4>useState Hook</h4>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    );
}
