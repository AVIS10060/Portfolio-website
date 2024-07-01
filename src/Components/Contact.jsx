import React from 'react'

const Contact = () => {
  return (
    <div name = "contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white flex items-center justify-center'>
        <div className='h-full flex flex-col  p-4 justify-center  max-w-screen-lg w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 mb-7 '>Contact</p>
                <p className='text-xl py-5'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/warkkemb"
                method='POST' className='flex flex-col w-full md:w-1/2 '>
                    <input type="text" 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus-:outline-none'
                    name = "name"
                    placeholder='Enter your name'
                    />
                     <input type="text" 
                    className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus-:outline-none'
                    name = "email"
                    placeholder='Enter your email'
                    />
                    <textarea name="message"
                    placeholder='Enter your Message here'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus-:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
      



    </div>
  )
}

export default Contact
