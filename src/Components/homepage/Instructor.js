import React from 'react'
import image from '../../assets/video/Frame 51.png'
const Instructor = () => {
  return (
    <div>
       <div className='flex flex-col w-11/12 mt-10 bg-black '>
          <div className='flex flex-row  items-center gap-28'>
              <div className='-ml-64'>
                  <img src={image} height="400" width="400" />
              </div>
             <div className='flex flex-col -mr-96 ml-72'>
               <div className=' w-4/6'>
                  <p className='text-white text-4xl font-semibold'>Become an</p>
                  <p className='text-cyan-400 text-4xl font-semibold'>instructor</p>
               </div>
               <div className='mt-4 text-white'>
                  <p>Instructors from around the world teach millions of students on StudyNotion.</p>
                  <p> We provide the tools and skills to teach what you love.</p>
               </div>
               <div className='mt-12'>
                 <button className='bg-yellow-400 px-6 py-3 rounded-md text-black hover:scale-95 transition-all duration-200 font-semibold'>Start Teaching Today</button>
               </div>
             </div>  
          </div>
          <div>
              
          </div>
       </div>
    </div>
  )
}

export default Instructor
