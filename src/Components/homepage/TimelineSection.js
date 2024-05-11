import React from 'react'
import { SlBadge } from "react-icons/sl";
import { FaHatCowboySide } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import icon1 from '../../assets/video/icons8-badge-50.png'
import icon2 from '../../assets/video/icons8-crown-50.png'
import icon3 from '../../assets/video/icons8-diamond-50.png'
import icon4 from '../../assets/video/icons8-code-50.png'
import banner2 from '../../assets/video/banner2.mp4'


const TimelineSection = () => {
  return (
    <div>
       <div className='flex flex-row   mt-5 gap-32 '>
           <div className='flex flex-col gap-4  mx-36 mt-14'>
               <div className='flex flex-row items-center gap-4'>
                     <div className='mr-2'>
                        <img src={icon1}/>
                     </div>
                     <div className='flex flex-col'>
                          <div className='text-lg text-black font-bold'>
                           Leadership
                          </div>
                          <div className='text-black font-semibold'>
                             Fully committed to the success company
                          </div>
                     </div>
               </div>
               <div className='flex flex-row items-center gap-4'>
                   <div className='mr-2'>
                        <img src={icon2}/>
                     </div>
                     <div className='flex flex-col'>
                          <div className='text-lg text-black font-bold'>
                           Responsiblity
                          </div>
                          <div className='text-black font-semibold'>
                            Students will always be our top priority
                          </div>
                     </div>
               </div>

               <div className='flex flex-row items-center gap-4'>
                   <div className='mr-2'>
                        <img src={icon3}/>
                     </div>
                     <div className='flex flex-col'>
                          <div className='text-lg text-black font-bold'>
                           Flexiblity
                          </div>
                          <div className='text-black font-semibold'>
                             The ability to switch is an important skill
                          </div>
                     </div>
               </div>
               <div className='flex flex-row items-center gap-4'>
                    <div className='mr-2'>
                        <img src={icon4}/>
                     </div>
                     <div className='flex flex-col'>
                          <div className='text-lg text-black font-bold'>
                            Solve the problem
                          </div>
                          <div className='text-black font-semibold'>
                            Code your way to a solution
                          </div>
                     </div>
               </div>
           </div>
           <div className='shadow-blue-200 shadow xl mt-6 w-2/5 h-auto '>
               <video autoPlay muted loop>
                  <source src={banner2}/>
               </video>
           </div>
       </div>
    </div>
  )
}

export default TimelineSection
