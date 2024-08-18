import { useContext } from 'react'
import React from 'react'
import { mycontext } from '../App'

export const Threecomp = () => {
    const use = useContext(mycontext)
    return (
      <div>{use}"rfy"</div>
    )
}
