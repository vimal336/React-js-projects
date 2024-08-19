import React, { useState, useCallback } from 'react';

const  UseCb = () =>{
  
  const [count, setCount] = useState(0);

  // Memoize the increment function to prevent it from being recreated on every render
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Dependencies array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseCb;
