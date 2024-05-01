"use client"
import axios from 'axios';
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Header from '@/Components/Header'; 
import { MyContext } from '@/Helper/Context';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const page = () => {
 
  const contextdata = useContext(MyContext)
   
  const [num, setnum] = useState(10)
  const [users, setusers] = useState([])
  const getAPIUsers = async ()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(users)
    // console.log(data)
    setusers(data)
    // const data = users.data
  } 
  const [userName11, setuserName11] = useState("");

  useEffect(() => {
    getAPIUsers()},[]
  )
   
  const notify = (()=>{
     toast("this is toast")
    })

  const notify2 = (()=>{
     
    //  https://fkhadra.github.io/react-toastify/introduction

          toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark", 
      });
  })

  return (
   <>  
    <div> 
      <Header num ={num}/>
      <h5>context data is {useContext(MyContext) } from page
      or {contextdata}</h5>
    </div>

    <br/> 
    <button onClick={notify}>Toast1</button>
    <button onClick={notify2}>Toast2</button>
    <ToastContainer/>
   <div>
      <button onClick={getAPIUsers} className='bg-green-500 text-white px-4 py-3 m-6 rounded fond-bold'>Get Data</button> 
      <div className='p-8 mt-5 bg-slate-100'>
        <ul>
          {
            users.map((ek)=>{
              return <li key={ek.id}>{ek.username}   -  <a href={`/${ek.id}`}> Explore </a></li>
            })
          }
        </ul>
      </div>
   </div>
   
   <div>
    <h3>this is 2 way binding</h3>
    <h2>Enter Name</h2>
    <input className='border-x-gray-400' value={userName11} onChange={(e)=>{setuserName11(e.target.value)}} />
    <h4>{userName11}</h4>

      <Link href="/Contact">Contact page Link</Link>  
   </div>
   </>
  )
}

export default page



