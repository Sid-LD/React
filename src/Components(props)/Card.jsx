//For learning props
// import React from 'react'

// const Card = (props) => {
//     console.log('props');
    
//   return (
//     <div className='text-4xl'>UserName is {props.a} </div>
//   )
// }

// export default Card




import React from 'react'

const Card = (props) => {
  return (
    <div className='text-3xl  bg-white p-8 incline-block text-center rounded w-60 text-black'>
        <img className='h-32 w-32 rounded-full mb-3  ' src ={props.photo} alt="" />
        <h1 className='text-3xl mb-2 font-bold py-2'>{props.username},</h1>
        <h5 className='text-blue-500'>{props.profession}</h5>
        <h2>{props.age}</h2>
        <h2>{props.city}</h2>
        <button className='bg-green-600 px-4 py-2 rounded mt-1  color-white '>Add Friend</button>
    </div>
  )
}

export default Card