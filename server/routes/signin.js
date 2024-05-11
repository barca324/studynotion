const express=require('express');
const router=express.Router();
const {sendotp,signup,login}=require('../controllers/auth');
const{resetpasswordtoken,resetpassword}=require('../controllers/resetpassword')
router.post('/resetpasswordtoken',resetpasswordtoken)
router.post('/resetpassword',resetpassword)
router.post('/getotp',sendotp)
router.post('/signup',signup)
router.post('/login',login)
module.exports=router;