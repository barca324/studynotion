const express=require('express');
const router=express.Router();

const{getenrolledcourses}=require('../controllers/profile')
router.get('/dashboard/getenrolledcourses',getenrolledcourses);
module.exports=router;