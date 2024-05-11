const jwt=require('jsonwebtoken');
const User=require('../models/user')
exports.auth=async(req,res,next)=>{
    try{
      const token=req.cookeis.token || req.body.token || req.header("Authorization").replace("Bearer","");
      if(!token)
      {
        return  res.status(401).json({
            success:false,
            message:"Token missing"
        })
      }
      try{
       const decode=await jwt.verify(token,"madhu");
       console.log(decode);
       req.user=decode
      }
      catch(error)
      {
        return  res.status(401).json({
            success:false,
            message:"Error"
        })
      }
      next();
    }
    catch(error)
    {
           console.log(error)
    }
}
exports.isStudent=async(req,res,next)=>{
  try{
      if(req.user.accountType != 'Student')
      {
        return  res.status(401).json({
            success:false,
            message:"This is route fro students"
        })
      }
  }
  catch(error)
  {
    return  res.status(401).json({
        success:false,
        message:"Error"
    })
  }
  next(); 
  }
  exports.isInstructor=async(req,res,next)=>{
    try{
        if(req.user.accountType != 'Instructor')
        {
          return  res.status(401).json({
              success:false,
              message:"This is route for instructors"
          })
        }
    }
    catch(error)
    {
      return  res.status(401).json({
          success:false,
          message:"Error"
      })
    }
    }
     
