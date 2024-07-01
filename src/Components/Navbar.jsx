import React, { useState } from 'react'

import { FaBars , FaTimes }  from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] = useState(false)

    const links = [
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"portfolio"
        },
        {
            id:4,
            link:"experience"
        },
        {
            id:5,
            link:"contact"
        }

    ]



  return (
    <div className=' bg-black w-full h-18 flex justify-between items-center p-4 text-white fixed z-10'>
      <div>
      <h1 className='text-4xl font-signature font-bold '>Avi Sharma</h1>
      </div>
       <ul className='hidden md:flex'>
       {links.map(({id,link})=>{
        return <li key={id} className='px-4 cursor-pointer font-medium text-gray-400 hover:scale-105 duration-200
        capitalize' >
            <Link to={link} smooth duration={500}>{link}</Link>
        </li>
       })}

       </ul>


       <div onClick={()=>{setNav(!nav)}} className=' md:hidden cursor-pointer text-gray-500 z-10 pr-4'>
        
        {nav ? <FaTimes size = {30} /> :  <FaBars size={30}/>}

       </div>



       {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
       bg-gradient-to-b from-black to-gray-800 '>
        {links.map(({id,link})=>{
        return <li key={id} className='py-4 cursor-pointer text-4xl capitalize text-gray-500'>
            <Link  onClick={()=>{setNav(!nav)}} to={link} smooth duration={500}>{link}</Link>
            </li>
       })}
       </ul> 
       }
    </div>
  )
}

export default Navbar
