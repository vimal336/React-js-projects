import React from 'react'
import { Userdetails } from './Userdetails'

export const User = ({theme}) => {
  const textStyle = {
    backgroundColor:theme === "Light"?"white":"black",
    color:theme === "Light"?"black":"white"
  }
  return (
    <>
    <div>user</div>
    <h1 style={textStyle}>Theme</h1>
    <Userdetails theme = {theme}/>
    </>
  )
}
