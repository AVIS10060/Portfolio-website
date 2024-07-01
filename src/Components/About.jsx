import React from 'react'

const About = () => {
  return (
    <div name = "about" className='w-full h-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white py-5' >
    <div className='max-w-screen-lg w-full h-full flex flex-col justify-center  px-4 mx-auto py-10'>
        <div className='pb-5'>
            <p className='text-4xl  font-bold border-b-4 border-gray-500 inline'>About</p>

        </div>
        <p className='text-xl md:mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium ad quia sint nobis commodi facilis culpa illo unde sunt, repellat rerum ab adipisci eveniet praesentium rem quas inventore atque voluptatibus odit eaque, perferendis doloremque? Natus molestias voluptas numquam, accusamus nihil, possimus officiis nobis laboriosam veritatis fuga alias provident accusantium qui sunt.</p>
    
        <br />
        <p className='text-xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quaerat voluptates libero eum assumenda soluta similique, illo delectus perspiciatis sed molestias animi, nostrum aspernatur. Recusandae quia nihil repellendus voluptatibus asperiores.</p>
    
    </div>
    </div>
  )
}

export default About
