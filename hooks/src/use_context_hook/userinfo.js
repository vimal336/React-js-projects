import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export const UserInfo = () => {
  const {theme} = useContext(ThemeContext)
  console.log(theme);

  const textStyle = {
    backgroundColor:theme === "Light"?"white":"black",
    color:theme === "Light"?"black":"white"
  }
  return (
    <><p>user Info </p>
     <h1 style={textStyle}>Theme</h1>
    </>
    
  )
}
