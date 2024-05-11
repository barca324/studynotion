const express=require('express');
const router=express.Router();

const{createcourse}=require('../controllers/course')
router.post('/createcourse',createcourse);
module.exports=router;