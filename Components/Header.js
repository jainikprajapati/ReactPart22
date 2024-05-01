"use client"
import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'
const Header = (props) => {
  const contextData = useContext(MyContext)
  return (
    <>
        <div  className='bg-green-400 py-3'>   
            {/* we had pass data from page to header to nav  */}
            <Nav num={props.num}/>
            {/* now same data we can access from context like below
            context are accessible from every where in project if mycontext tag is added in layout.js file directly */}
            <h2>context data is {contextData} from header</h2>

        </div>
    </>
  )
}

export default Header