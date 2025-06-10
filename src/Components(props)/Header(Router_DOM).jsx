////React-Router DOM using <a/> tag
// // we will avoid using <a/> tag becoz iski wajah se page reload ho rha hai so we use link tag to solve this

// import React from 'react'

// const Header = () => {
//   return (
//     <div className='p-8 bg-emerald-700 flex items-center justify-between text-white'>
//         <div className='text-5xl'>Classmate</div>
//         <div className='flex items-center gap-8 text-2xl'>
//             <a className='text-3xl underline' href="/">Home</a>
//             <a className='text-3xl underline' href="/about">About</a>
//             <a className='text-3xl underline' href="/contact">Contact</a>
//             <a className='text-3xl underline' href="/product">Product</a>  

//         </div> 
//     </div>
//   )
// }

// export default Header




////React Router DOM using Link tag
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-8 bg-emerald-700 flex items-center justify-between text-white'>
        <div className='text-4xl'>Classmate <input className='text-black p-3 w-80 h-12 ml-3' type="text" /></div>
        hello
        <div className='flex items-center gap-8 text-2xl underline'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>

        </div> 
    </div>
  )
}

export default Header
