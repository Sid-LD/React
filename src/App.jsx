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








//Application of props in arrays
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
