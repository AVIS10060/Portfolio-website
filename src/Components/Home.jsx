import React from 'react'
import Dp from '../assets/portfolio-image.jpeg'
import { Link } from 'react-scroll'
import Portfolio from './Portfolio'

const Home = () => {
  return (
    <div name = 'home' className='h-full md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 
    p-1'>
    <div  className=' max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full  text-white
        '>
        <div className='flex flex-col justify-center  h-full mt-4 '>
            <h2 className='text-4xl sm:text-6xl max-w-lg font-bold txt-white mt-10 pt-3 px-5'>I am a Software Developer</h2>
            <p className='text-gray-500 max-w-md p-4 '>
            I craft user-friendly web experiences.  As a front-end developer, I leverage the power 
            of React.js and Tailwind CSS to translate
             designs into stunning, responsive websites and applications.
             My passion lies in creating seamless interactions for users across all devices.
            </p>
            <div>
            <Link to = "portfolio" duration={500} smooth className='text-white w-fit px-6 py-3 my-4 rounded-md bg-gradient-to-r from-cyan-500 
            to-blue-500 font-semibold cursor-pointer hover:scale-110 duration-200 mx-4 '>
              Portfolio
            </Link>
            </div>
        </div>
       
        <div className='w-[200px] h-[300px] py-4'>
        <img src={Dp} alt="" className='rounde-2xl mx-auto w-[100%] h-[100%] ' />
    
        </div>


    </div>
    </div>
  )
}

export default Home
