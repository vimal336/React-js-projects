import React from 'react'
import { Userdetails } from './Userdetails'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export const User = () => {

  const {theme} = useContext(ThemeContext)
  console.log(theme);

  const textStyle = {
    backgroundColor:theme === "Light"?"white":"black",
    color:theme === "Light"?"black":"white"
  }
  
  return (
    <>
    <div>user</div>
    <h1 style={textStyle}>Theme</h1>
    <Userdetails/>
    </>
  )
}
