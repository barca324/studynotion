import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
const CourseInformationform = () => {
    
    const dispatch=useDispatch();
    const[courseTitle,setCourseTitle]=useState('');
    const[courseDescription,setCourseDescription]=useState('');
    const[coursePrice,setCoursePrice]=useState('');
    const[courseTag,setCourseTag]=useState('');
    const[courseThumbnail,setCourseThumbnail]=useState('');

  const onSubmit=(e)=>{
     e.preventDefault();
  }
  return (
   <form onSubmit={onSubmit} className='rounded-md border-black bg-sky-800 p-6 space-y-8  '>
        <div>
            <label htmlFor="courseTitle">Course Title<sup className='text-red-600'>*</sup></label>
            <input id='courseTitle' placeholder='Enter Course Title' onChange={(e)=>setCourseTitle(e.target.value)} className='text-gray-900' required/>

            
        </div>   
        
             <div>
              <label htmlFor="message" className="block ">Course Description<sup className='text-red-600'>*</sup></label>
              <textarea id="message" name="message" onChange={(e)=>setCourseDescription(e.target.value)} rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div>
            <label htmlFor="coursePrice">Course Price<sup className='text-red-600'>*</sup></label>
            <input id='coursePrice' placeholder='Enter Course Price' onChange={(e)=>setCoursePrice(e.target.value)} className='text-gray-900' required/>
            </div>  
            <div>
            <label htmlFor="coursePrice">Course Price<sup className='text-red-600'>*</sup></label>
            <input id='coursePrice' placeholder='Enter Course Price' onChange={(e)=>setCoursePrice(e.target.value)} className='text-gray-900' required/>
            </div>   
     
    

   </form>
  )
}

export default CourseInformationform
