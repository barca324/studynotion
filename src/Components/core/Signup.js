import React, { useEffect, useState } from 'react';
import { apiConnector } from '../../services/apiconnector';
import { sendotp } from '../../services/operations/Authapi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { setSignUpData } from '../../reducer/slice/authslice';
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSpinner } from '@coreui/react'
import Spinner from '../../Spinner';
const SignUp = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [accountType, setAccounttype] = useState("Student");
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const { loading } = useSelector((state) => state.auth);
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("form submitted")
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmpassword);
    console.log('Is Instructor:', accountType);
    const signUpData = {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
      accountType,
    };
    console.log(signUpData)
    dispatch(setSignUpData(signUpData));
    if(password!=confirmpassword)
    {
      alert('Password and confirmpassword should match')
    }
    if(password==confirmpassword)
    dispatch(sendotp(email,navigate));
    
    console.log("Hello")

  };







  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-400 py-12 px-4 sm:px-6 lg:px-8">
          {
            loading?<div><Spinner/></div>:
            <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstname" className="sr-only">First Name</label>
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="First Name"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="sr-only">Last Name</label>
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="confirmpassword" className="sr-only">Confirm Password</label>
                  <input
                    id="confirmassword"
                    name="confirmpassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
    
              <div className="flex items-center mt-4 flex flex-row ">
                
                <input
                  id="isInstructor"
                  name="isInstructor"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={accountType === "Instructor"}
                  onChange={(e) => {e.target.checked ?setAccounttype("Instructor") : setAccounttype("Student")}}
                />
                <label htmlFor="isInstructor" className="ml-2 block text-sm text-gray-900">
                  Are you an instructor?
                </label>
                
               
                <div className='flex flex-row gap-0  ml-56'>
                    <div>
                      <Link to='/login'><p className='text-xm'>Login</p></Link>
                    </div>
                    <div className='items-center justify-center  pt-2'>
                      <FaArrowRight size={12}/>
                    </div>
                  
                </div>
                
                
              </div>
    
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          }
    </div>
  );
};

export default SignUp;

