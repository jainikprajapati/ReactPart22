import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page


// "use client"
// import axios from 'axios';
// import Link from 'next/link';
// import React, { useContext, useEffect, useState } from 'react'
// import Header from '@/Components/Header';
// import { MyContext } from '@/Helper/Context';
// const page = () => {

//   const usernamefromContext = useContext(MyContext)
//   console.log(usernamefromContext)

//   const [num, setnum] = useState(10)
//   const [users, setusers] = useState([])
//   const getAPIUsers = async ()=>{
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
//     // console.log(users)
//     // console.log(data)
//     setusers(data)
//     // const data = users.data
//   } 
//   const [userName11, setuserName11] = useState("");

//   useEffect(() => {
//     getAPIUsers()},[]
//   )
   
  
//   return (
//    <>  
//     <div> 
//       <Header num ={num}/>
//     </div>

//     <br/> <br/> <br/> 

//    <div>
//       <button onClick={getAPIUsers} className='bg-green-500 text-white px-4 py-3 m-6 rounded fond-bold'>Get Data</button> 
//       <div className='p-8 mt-5 bg-slate-100'>
//         <ul>
//           {
//             users.map((ek)=>{
//               return <li key={ek}>{ek.username}   -  <a href={`/${ek.id}`}> Explore </a></li>
//             })
//           }
//         </ul>
//       </div>
//    </div>
   
//    <div>
//     <h3>this is 2 way binding</h3>
//     <h2>Enter Name</h2>
//     <input className='border-x-gray-400' value={userName11} onChange={(e)=>{setuserName11(e.target.value)}} />
//     <h4>{userName11}</h4>

//       <Link href="/Contact">Contact</Link>  
//    </div>
//    </>
//   )
// }

// export default page



