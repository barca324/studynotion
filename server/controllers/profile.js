const User=require('../models/user')
exports.getenrolledcourses=async(req,res)=>{
   try{
        const userid=req.user.id
        const userdetails=await User.findOne({
            _id:userid
        }).populate("courses").exec()
        if(!userdetails)
        {
            return res.status(400).json({
                success:false,
                message:`Could not find user with ${userid}`
            })
        }
        return res.status(200).json({
            success:true,
            data:userdetails.courses
        })
   }
   catch(error)
   {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:error.message
    })
    
   }
}