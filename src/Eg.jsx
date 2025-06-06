import React from 'react'
import Eg2 from './Components/Eg2'

const Eg = (props) => {
  return (
    <div className='text-white'>
        <h1>I am {props.user}</h1>
        <Eg2 name="Siddhant" city2={props.city} />
    </div>
  )
}

export default Eg

//this whole process is called is called props drilling