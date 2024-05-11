import { combineReducers } from "@reduxjs/toolkit";
import authreducer from './slice/authslice'
import profilereducer from './slice/profslice';
import cartreducer from'./slice/cartslice'
import coursereducer from './slice/courseslice'
const rootreducer=combineReducers({
  auth:authreducer,
  profile:profilereducer,
  cart:cartreducer,
  course:coursereducer
});
export default rootreducer