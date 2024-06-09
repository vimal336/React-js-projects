import React from 'react'

export const Header = (props) => {
  return (
    <div>
        <h1 style={{backgroundColor:'red'}}>{props.name}</h1>
        <h1>{props.age},"profession"{props.job}</h1>
    </div>
  )
}

