import React from 'react'
import { useSelector } from 'react-redux'
import { FaCheck } from 'react-icons/fa'
import CourseInformationform from './CourseInformationform'
const RenderSteps = () => {
    const {step}=useSelector((state)=>state.course)
const steps=[{
    id:1,
    title:"Course Information"
},{
    id:2,
    title:"Course Builder"
},
{
    id:3,
    title:"Publish"
}]

  return (
    <div>
        <div>
        {
            steps.map((item)=>(
              <>
                <div className={`${step===item.id ?"bg-yellow-500 border-yellow-50 text-yellow-50":" bg-black border-blue-50 text-blue-50"}`}>
                    {
                        step>item.id ?(<FaCheck/>):(item.id)
                    }
                </div>
              </>  
            ))
        }
         </div>
         <div>
            {
                steps.map((item)=>(
                    <>
                      <div>
                        {
                            <p>{item.title}</p>
                        }
                      </div>
                    </>
                ))
            }
         </div>
         {step===1 && <CourseInformationform/>}
    </div>
  )
}

export default RenderSteps
