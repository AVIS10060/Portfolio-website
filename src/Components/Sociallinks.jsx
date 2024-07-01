import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
 
const Sociallinks = () => {

    const Links = [

        {
            id:1,
            child:(
                <>
                     LinkedIn <FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href:"https://www.linkedin.com/in/avi-sharma-44b9a72a1/",
            style : "rounded-tr-md"
            
        },
        {
            id:2,
            child:(
                <>
                     Github <FaGithub size={30}></FaGithub>
                </>
            ),
            href:"https://github.com/AVIS10060",
            
        },
        {
            id:3,
            child:(
                <>
                     Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href:"mailto:avisharmaid@gmail.com",
            
        },
        {
            id:4,
            child:(
                <>
                     LinkedIn <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                </>
            ),
            href:"./Avi resume.pdf",
            style:"rounded-br-md",
            download:true
        },
        
    ]



  return <>
   <div className='flex flex-col fixed top-[35%] left-0'>
    <ul >
   {Links.map(({id,child,href,style,download}) => (
    <>
    <li key= {id}  className={`flex justify-between items-center h-14 w-40 bg-gray-500  rounded-sm px-4 font-semibold ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-200 ${style}`}
         >
            <a  href={href} className='flex justify-between items-center w-full text-white'
              
              download={download}
              target='_blank'
              rel = 'noreferrer'>
             {child}
    </a>
    </li>
    </>
   ))}       
    </ul>
    </div>
  </>  
}

export default Sociallinks;
