import React, { useState } from 'react'

export const Header = (props) => {
  
  const [increment, setincrement] = useState(0);

  const handleincrement = () =>{
    setincrement(c => c+1)
  }

  return (
    <div>
          <h1>{increment}</h1>
         <button onClick={handleincrement}> + </button>
        <h1 style={{backgroundColor:'red'}}>{props.name}</h1>
        <h1>Age:{props.age}Profession:{props.job}</h1>
    </div>
  )
}

