import React from 'react'
import NavPart2 from './NavPart2'

const Navbar = () => {
  return (
    <nav className='flex py-5 px-8 items-center justify-between'>
      <h2 className='text-2xl'>Sheryians</h2>
      <NavPart2 />


    </nav>
  )
}

export default Navbar