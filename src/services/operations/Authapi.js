import {toast}from 'react-hot-toast';
import { setLoading, setToken } from '../../reducer/slice/authslice';
import { apiConnector } from '../apiconnector';
import { auth } from '../api';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../reducer/slice/profslice';

export  function signup(accountType, firstname, lastname, email, password, confirmpassword,  navigate,otp) {
    
 return async (dispatch)=>{
    dispatch(setLoading(true));
    
    try {
      const response = await apiConnector("POST", auth.SIGNUP_API, { accountType, firstname, lastname, email, password, confirmpassword,otp});
      console.log(response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup successful");
      
      navigate('/login');
    }
     catch (error) {
      toast.error("Signup failed");
      console.log("Error",error)
      navigate('/signup')
  
     
    }
    dispatch(setLoading(false));
 }
}
export function sendotp(email,navigate){
    return async (dispatch)=>{
        dispatch(setLoading(true));
      
        try {
          const response = await apiConnector("POST", auth.SENDOTP_API, {email});
          console.log("Response=",response);
          if (!response.data.success) {
            throw new Error(response.data.message);
          }
          toast.success("OTP sent successfully");
          navigate('/verifyemail');
        }
         catch (error) {
          toast.error("Signup failed");
          navigate('/signup')
      
         
        }
        dispatch(setLoading(false));
     }
     
}
export  function login(email,password,navigate) {
    
  return async (dispatch)=>{
     dispatch(setLoading(true));
     
     try {
       const response = await apiConnector("POST", auth.LOGIN_API, { email,password});
       console.log("gvvhj",response);
       if (!response.data.success) {
         throw new Error(response.data.message);
       }
       toast.success("Login successful");
       dispatch(setToken(response.data.token));
       dispatch(setUser({...response.data.userdetails}));
       localStorage.setItem("token",JSON.stringify(response.data.token))
       localStorage.setItem("user",JSON.stringify(response.data.userdetails))
      
       navigate('/dashboard/profile');
     }
      catch (error) {
       toast.error("Signup failed");
       console.log("Error",error)
       alert('Wrong email or password')
       navigate('/login')
   
      
     }
     dispatch(setLoading(false));
  }
 }

export function logout(navigate){
  return async (dispatch)=>{
  try{
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log('localStorage token:', localStorage.getItem("token")); // Should log 'null'
    console.log('localStorage user:', localStorage.getItem("user")); // Should log 'null'
    navigate('/')
  }
  catch(error){
    console.log("Error",error)
  }
}
}
