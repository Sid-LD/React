import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
    const username=useContext(DataContext)
  return (
    <div>Header{username.age}</div>
  )
}

export default Header
