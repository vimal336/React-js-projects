import React from 'react'

export const Header = (props) => {
  return (
    <div>
        <h1 style={{backgroundColor:'red'}}>{props.header}</h1>
        <h1>{props.value}</h1>
    </div>
  )
}

