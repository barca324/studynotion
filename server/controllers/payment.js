const {instance}=require('../config/razorpay');
const Course=require('../models/course');
const User=require('../models/user');
const mailsender=require('../utils/sendmailer');
exports.capturepayment=async(req,res)=>{
    const{courseid}=req.body;
    const userid=req.user.id;

    if(!courseid)
    {
        return res.json({
            success:false,
            message:"Course id is required"
        })
    }
     const course=await Course.findById({courseid});
     if(!course)
     {
        return res.json({
            success:false,
            message:"Course not found"
        })
     }
}