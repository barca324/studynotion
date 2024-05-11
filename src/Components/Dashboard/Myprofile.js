import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from '../homepage/Navbar'
import { Link } from 'react-router-dom'
const Myprofile = () => {

    const {user}=useSelector((state)=>state.profile);
    console.log(user);
    const navigate=useNavigate();
  return (
    <div>
      <Navbar/>
    

    <div className='text-white text-center'>
      <h1 className='text-3xl'>
        My profile
      </h1>
      <div className='flex flex-row gap-5 mt-16 text-center pl-64'>
        <div className=' ml-96'>
            <p>
               {user.firstname + " "+user.lastname}
            </p>
            <p>
               {user.email}
            </p>
        </div>
        <div>
          <button className='bg-yellow-400 px-6 py-2  rounded-md text-black hover:scale-95 transition-all duration-200'>Edit </button>
        </div>
        
      </div>
      <br/>
      <div className='text-yellow-500 text-center'>
            {
              user.accountType === 'Student'?(<div><Link to='/dashboard/getenrolledcourses'>Enrolled Courses</Link></div>):(<div><Link to='/dashboard/addcourse'>Add course</Link></div>)
            }
        </div>
      </div>
    </div>


  )
}

export default Myprofile
