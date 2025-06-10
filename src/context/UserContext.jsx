import React, { createContext } from 'react'

export const DataContext=createContext()

const UserContext = ({children}) => {
    const userData={
        username:"Siddhant",
        age:69,
        city:"Nagaon"
    }
  return (
    <div>
        <h1>
            <DataContext.Provider value={userData}>
                {children}
            </DataContext.Provider>
        </h1>
    </div>
  )
}

export default UserContext
//children is wrapped around data context