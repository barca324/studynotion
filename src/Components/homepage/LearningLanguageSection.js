import React from 'react'
import image1 from '../../assets/video/Frame 55.png'
import image2 from '../../assets/video/Frame 74.png'
import image3 from '../../assets/video/Frame 57.png'
const LearningLanguageSection = () => {
  return (
    <div>
      <div className='flex flex-col w-[100%] bg-white items-center mt-16 mb-10'>
        <div>
            <p className='font-semibold text-black text-3xl'>Your swiss knife for <span className='text-cyan-500'>learning any language</span></p>
        </div>
        <div className='mt-4'>
            <div>
          <p className='text-black font-semibold'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, </p>
            </div>
            <div className=' pl-40 mt-0'>
                 <p className='text-black font-semibold' >progress tracking, custom schedule and more.</p>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center'>
            <img src={image1}/>
            <img src={image2} className='-ml-32'/>
            <img src={image3} className='-ml-32'/>
        </div>
        <div>
          <button className='bg-yellow-400 px-6 py-3 rounded-md text-black hover:scale-95 transition-all duration-200 font-semibold'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection
