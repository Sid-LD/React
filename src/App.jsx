// import React from 'react'

// const App = () => {
//   return (
//     <>
//     <h1>Hello guys</h1>
//     <h1>Hello </h1>
//     </>   //these are called fragments(empty tags)
//   )
// }

// export default App


//Components
// import React from 'react'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'


// const App = () => {
//   return (
//     <>
//     <Navbar />
//     <Footer />
    
//   </>
//   )
// }

// export default App


///////////////////////////////////////////////////////////////
//Props
// import React from 'react'
// import Card from './Components/Card'

// const App = () => {
//   const user="Sarthak"
//   return (
//     <div>
//       <Card a={user} />
//       <Card a='Siddhant' />   
//     </div>
//   )
// }

// export default App
//Enhances reusability








////Application of props in arrays

// import React from 'react'
// import Card from './Components/Card'

// const App = () => {
//   const users=[
//   {
//     "name": "Alice Johnson",
//     "city": "New York",
//     "age": 29,
//     "profession": "Software Engineer",
//     "profile_pic": "https://example.com/profiles/alice.jpg"
//   },
//   {
//     "name": "Mohammed Al-Farsi",
//     "city": "Dubai",
//     "age": 34,
//     "profession": "Architect",
//     "profile_pic": "https://example.com/profiles/mohammed.jpg"
//   },
//   {
//     "name": "Li Wei",
//     "city": "Beijing",
//     "age": 26,
//     "profession": "Graphic Designer",
//     "profile_pic": "https://example.com/profiles/liwei.jpg"
//   },
//   {
//     "name": "Carlos Ramirez",
//     "city": "Mexico City",
//     "age": 31,
//     "profession": "Marketing Manager",
//     "profile_pic": "https://example.com/profiles/carlos.jpg"
//   },
//   {
//     "name": "Emma Thompson",
//     "city": "London",
//     "age": 27,
//     "profession": "Data Analyst",
//     "profile_pic": "https://example.com/profiles/emma.jpg"
//   }

// ]


//   // users.map(function(){
//   //   return "Hello guys"
//   // })  

//   return (
//     <div>
//       <div className='p-5 flex gap-5 text-white'>
//         {users.map(function(elem){
//           return <Card username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} photo={elem.profile_pic}/>
//         })}

//       </div>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Eg from './Eg'

// const App = () => {
//   return (
//     <div>
  
//       <Eg user="Rahul" city="Delhi" />
//     </div>
//   )
// }

// export default App






//////////////////////////////////////////////////////////////////////////

////Function starts after clicking on the button(API calling with Axios)

// import axios from 'axios'
// import React, { useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([])
//   const getData=async()=>{

//     const response= await axios.get('https://picsum.photos/v2/list')
//     setData(response.data)
    

    
//   }
//   return (
//     <div className='p-8'>
//       <button onClick={getData} className='bg-teal-600 text-white text-2xl px-4 py-4 rounded active:scale-95'>Get Data</button>
//       <div className='bg-stone-700 p-8 my-2 text-white text-3xl'>
//         {data.map(function(elem,idx){
//           return <div key={idx} className='bg-gray-100 text-black w-full flex items-center justify-between p-6 rounded mb-4'>
//             <img className='h-80' src={elem.download_url} alt="" />
//             <h1>{elem.author}</h1>
//           </div>
//         })}
        
//       </div>
//     </div>
//   )
// }

// export default App



// //Function starts automatically(API calling with axios)

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([])
//   const getData=async()=>{

//     const response= await axios.get('https://picsum.photos/v2/list')
//     setData(response.data)
    
//   }
//   useEffect(() => {
//     getData()
  

//   }, [])
  

//   return (
//     <div className='p-8'>
     
//       <div className='bg-stone-700 p-8 my-2 text-white text-3xl'>
//         {data.map(function(elem,idx){
//           return <div key={idx} className='bg-gray-100 text-black w-full flex items-center justify-between p-6 rounded mb-4'>
//             <img className='h-80' src={elem.download_url} alt="" />
//             <h1>{elem.author}</h1>
//           </div>
//         })}
        
//       </div>
//     </div>
//   )
// }

// export default App



////React Router DOM
// import React from 'react'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import { Route, Routes } from 'react-router-dom'
// import Product from './pages/Product'
// import Header from './Components/Header'

// const App = () => {
//   return (
//     <div>
//       <Header/>

//       <Routes>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/product' element={<Product/>}/>
//         <Route path='/' element={<Home/>}/>
//       </Routes>

//     </div>
//   )
// }

// export default App



////Context API
import React, { useContext } from 'react'
import Header from './Compo(Context_API)/Header'
import Footer from './Compo(Context_API)/Footer'
import Section from './Compo(Context_API)/Section'
import { DataContext } from './context/UserContext'

const App = () => {
  const data=useContext(DataContext)
  console.log(data);
  
  return (
    <div>
      <h1>This App is created by {data.username}</h1>
      <Header/>
      <Footer/>
      <Section/>
    </div>
  )
}

export default App