 "use client"
 import React, { createContext } from 'react'
 export const MyContext = createContext()

 const Context = ({children}) => {
    const contextuser = "Jainik Context"
   return (
     <div>
        <MyContext.Provider value={contextuser}>
            {children}
        </MyContext.Provider>
     </div>
   )
 }
 
 export default Context