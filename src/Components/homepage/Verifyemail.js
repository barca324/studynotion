import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../services/operations/Authapi';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Spinner'

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');
  const { loading, signUpData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signUpData) {
      navigate('/signup');
    }
  }, [signUpData, navigate]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("otp before",otp);
    console.log("sd",signUpData)
    const { accountType, firstname, lastname, email, password, confirmpassword } = signUpData;
    dispatch(signup(accountType, firstname, lastname, email, password, confirmpassword, navigate, otp));
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        {loading ? (
          <div> <Spinner/></div>
         
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-4">Verify Email</h1>
            <p className="mb-4">A verification code has been sent to you. Enter the code below.</p>
            <form onSubmit={handleOnSubmit} className='flex flex-col justify-center items-center' >
              <div>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                separator={<span className="">--</span>}
                renderInput={(props) => <input {...props} className='text-black ' />}
               />
              </div>
              <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;

