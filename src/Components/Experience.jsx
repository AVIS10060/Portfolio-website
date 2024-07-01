import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import react from '../assets/react.png'

const Experience = () => {



    const experiences = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'

        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-blue-800'
        },
        {
            id:5,
            src:github,
             title:"Github",
            style:"shadow-gray-400"
        },
        {
            id:6,
            src:tailwind,
            title:"Tailwind",
            style:"shadow-sky-500"
        },






    ]

  return (
    <div  name = "experience" className='bg-gradient-to-b from-gray-800 to-black w-full  text-white w-full h-full py-20'>
        <div className='max-w-screen-lg p-4 flex flex-col justify-center h-full w-full mx-auto'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 inline mb-7 '>Experience</p>
                <p className='text-xl py-5'>These are the technologies I have worked with</p>
            </div>
           
            <div  className='w-full  grid grid-cols-2 sm:grid-cols-4 gap-8 px-10 sm:px-0 py-8  '>
           {experiences.map(({id,title,src,style})=>{
            return (
               
                <div key={id} className={`flex flex-col justify-center sm:px-6 shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                    <img src={src} alt="" className='sm:h-[135px] sm:mx-5 mx-2' />
                    <p className='text-center my-1'>{title}</p>
                </div>
            

            )
           })}
           </div>
        </div>

      
    </div>
  )
}

export default Experience
