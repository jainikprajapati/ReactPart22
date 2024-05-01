// "use client"
// import axios from 'axios'; 
// import React, { useEffect, useState } from 'react'

// const page = ({params}) => {
//     const {id} = params

//     const [users, setusers] = useState([])
//     const getAPIUsers = async ()=>{
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+ id) 
     
//      setusers(data)
//   } 
   
//   useEffect(() => {
//     getAPIUsers()},[]
//    )

//   return (
//     <div>{JSON.stringify(users)}</div>
//   )
// }

// export default page