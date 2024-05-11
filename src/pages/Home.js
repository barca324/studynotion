import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Highlight from '../Components/homepage/Highlight';
import banner from '../assets/video/banner.mp4';
import image from '../assets/video/imagehome.png'
import TimelineSection from '../Components/homepage/TimelineSection';
import LearningLanguageSection from '../Components/homepage/LearningLanguageSection';
import Instructor from '../Components/homepage/Instructor';
import Navbar from '../Components/homepage/Navbar';
import Footer from '../Components/homepage/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='relative mx-auto flex flex-col items-center text-white rounded-full w-fit mt-10'>
        <Link to="/signup">
          <div className='flex flex-row items-center rounded-full transition-all duration-200 hover:scale-95 px-10 py-[5px] justify-between gap-2'>
            <button>Become an Instructor</button>
            <FaArrowRight />
          </div>
        </Link>
        <div className='flex flex-row gap-8 text-center text-4xl font-semibold mt-7 '>
          Empower your Future with
          <div className='font-bold text-blue-900'>
            Coding Skills
          </div>
        </div>
        <div className='mt-4 text-center font-bold text-lg text-gray-500 w-[90%]'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>
        <div className='flex flex-row gap-5 mt-8 '>
          <button className='bg-yellow-400 px-6 py-3 rounded-md text-black hover:scale-95 transition-all duration-200'>Learn More</button>
          <button className='bg-slate-800 px-6 py-3 rounded-md text-white hover:scale-95 transition-all duration-200'>Book a Demo</button>
        </div>
        <div className='shadow-blue-200 shadow xl mt-6 w-2/5 h-1/5 '>
          <video autoPlay loop muted>
            <source src={banner} type="video/mp4" />
          </video>
        </div>
        <div className='flex flex-row gap-16 w-[100%] mt-8 '>
          <div className='flex flex-col mt-8 w-[50%] px-40 '>
            <div className='text-3xl font-semibold'>
              Unlock your <span className='font-bold text-blue-900 text-3xl'>Coding potential</span>
              <div>
                with our online courses.
              </div>
            </div>
            <div className='text-sm text-gray-400 mt-4'>
              Our courses are designed and taught by industry experts who have
              <div>
                years of experience in coding and are passionate about sharing their
              </div>
              <div>
                knowledge with you.
              </div>
            </div>
            <div className='flex flex-row gap-5 mt-8 '>
              <button className='bg-yellow-400 px-6 py-3 rounded-md text-black hover:scale-95 transition-all duration-200'>Try it yourself</button>
              <button className='bg-slate-800 px-6 py-3 rounded-md text-white hover:scale-95 transition-all duration-200'>Learn more</button>
            </div>
          </div>
          <div className='mt-10 h-fit px-36 w-[50%] text-xl pt-16'>
            <div className='flex flex-col gap-2 font-bold font-mono'>
              <TypeAnimation
                sequence={["Hi there, Welcome to Study Notion", 1000, ""]}
                repeat={Infinity}
                omitDeletionAnimation={true}
                style={{
                  whiteSpace: "pre-line",
                  display: "block"
                }}
              />
            </div>
            <div>
              <Link to='/signup'><button className='bg-yellow-400 px-6 py-3 rounded-md text-black hover:scale-95 transition-all duration-200 mt-4 mx-28 text-center'>Get started</button></Link>
            </div>
          </div>
        </div>
        <div className='flex flex-row-reverse gap-16 w-[100%] mt-8  '>
          <div className='flex flex-col mt-18 w-[50%] px-40  py-24  '>
            <div className='text-3xl font-semibold'>
             Start <span className='font-bold text-blue-900 text-3xl'>coding </span>
              <div>
                in seconds.
              </div>
            </div>
            <div className='text-sm text-gray-400 mt-4'>
            Go ahead, give it a try. Our hands-on learning environment 
              <div>
              means you'll be writing real code from your very first lesson.
              </div>
             
            </div>
            <div className='flex flex-row gap-5 mt-8 '>
              <button className='bg-yellow-400 px-6 py-3 rounded-md text-black hover:scale-95 transition-all duration-200'>Continue Lesson</button>
              <button className='bg-slate-800 px-6 py-3 rounded-md text-white hover:scale-95 transition-all duration-200'>Learn more</button>
            </div>
          </div>
          <div className='mt-10 h-fit px-36 w-[50%] text-xl pt-16'>
           
              <img src={image} width="700" height="80" />
            
            
              
            
          </div>
        </div>
        <div className='bg-white w-[100%] text-blue-200 h-80'>
          <div className='flex flex-row gap-5 mt-8 items-center justify-center py-28 relative  '>
              
              <button className='bg-yellow-400 px-6 py-3 rounded-md text-black hover:scale-95 transition-all duration-200'>Explore full Catalog </button>
              <button className='bg-slate-800 px-6 py-3 rounded-md text-white hover:scale-95 transition-all duration-200'>Learn more</button>
            </div>
        </div>
        <div className='w-[100%] max-w-maxContent flex flex-col items-center justify-between bg-white'>
             <div className='flex flex-row gap-24 '>
                <div className='flex flex-col'>
                  <div className='text-3xl text-black font-bold'>
                    Get the skills you need for a <span className='text-blue-400 text-3xl'>job</span>
                  </div>
                   <div>
                   <span className='text-blue-400 text-3xl font-bold'>that is in demand</span>
                  </div>
                </div> 
                 <div className='flex flex-col text-black ml-40 px-8'>
                    <div className='flex flex-col '>
                      <div>
                       The modern StudyNotion is the dictates its own terms. Today, to be a
                      </div>
                      <div>
                        competitive specialist requires more than professional skills.
                      </div>
                    </div>
                     <div className='mt-4'>
                     <button className='bg-yellow-400 px-6 py-3 rounded-md text-black hover:scale-95 transition-all duration-200'>Learn more </button>
                     </div>
                 </div>
                 
             </div>
                  <TimelineSection/>
                  <LearningLanguageSection/>
                 
        </div>
        <Instructor/>
      </div>
      <Footer/>     
    </div>
  )
}

export default Home;


