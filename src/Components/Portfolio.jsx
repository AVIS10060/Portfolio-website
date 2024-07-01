import React from 'react'
import gkeep from '../assets/googlekeep.png'
import reactrouter from '../assets/reactrouter.png'
import recipe from '../assets/recipe.png'
import tictac from '../assets/tic-tac.png'
import weather from '../assets/weatherapp.png'

const portfolios = [
    {
        id:1,
        src:weather,
        demo:"https://avis10060.github.io/weather-app/",
        code:"https://github.com/AVIS10060/weather-app"
    },
    {
        id:2,
        src:tictac,
        demo:"https://avis10060.github.io/tic-tac/",
        code:"https://github.com/AVIS10060/tic-tac"
    },
    {
        id:3,
        src:recipe,
        demo:"https://master--nimble-donut-d0eb13.netlify.app/",
        code:"https://github.com/AVIS10060/recipeapp"
    },
    {
        id:4,
        src:reactrouter,
        demo:"https://master--strong-capybara-91ccd7.netlify.app/",
        code:"https://github.com/AVIS10060/react-menu-website"
    },
    {
        id:5,
        src:gkeep,
        demo:"https://fastidious-halva-7bad14.netlify.app/",
        code:"https://github.com/AVIS10060/google-keep"
    }
]


const Portfolio = () => {
  return (
    <div  name = "portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full  text-white h-full py-20'>
        <div className='max-w-screen-lg p-4 flex flex-col justify-center h-full w-full mx-auto'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 inline mb-7 '>Portfolio</p>
                <p className='text-xl py-8'>Check out some of my work right here.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-3'> 
               {portfolios.map(({id,src,demo,code})=>{
                return (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                    <img src={src} alt=""  className='rounded-lg w-full bg-cover
                    h-[200px] md:h-[225px] px-2'/>
                   <div className='flex items-center'> 

                   <button className='w-1/2 px-6 py-2 m-3  font-bold md:text-l'>
                   <a href={demo}  target='_blank'
                   rel = 'noreferrer'> Demo</a></button>
                   <button className='w-1/2 px-6 py-2 m-3  font-bold'>
                   <a href={code}  target='_blank'
                   rel = 'noreferrer'> Code</a></button>
                   </div>
                </div>
                )
                
               })}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
