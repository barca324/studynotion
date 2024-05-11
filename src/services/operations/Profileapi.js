import {toast}from 'react-hot-toast';
import { setLoading, setToken } from '../../reducer/slice/authslice';
import { apiConnector } from '../apiconnector';
import { profile} from '../api';
import { useNavigate } from 'react-router-dom';

export async function getenrolledcourses(token){
    let result=[];
    try{
        const response=await apiConnector("GET",profile.GETENROLLEDCOURSES,null,{Authorization:`Bearer ${token}`})
        if(!response.data.success)
        {
            throw new Error(response.data.message)
        }
    }
    catch(error)
    {
        console.log(error.message)
    }
}