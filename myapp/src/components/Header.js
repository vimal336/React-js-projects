import React from 'react'

export const Header = (props) => {
  return (
    <div>
        <h1>header</h1>
        <h1>{props.name}</h1>
    </div>
  )
}
