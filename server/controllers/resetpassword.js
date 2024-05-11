const User=require('../models/user');
const mailsender=require('../utils/sendmailer')
const bcrypt=require('bcrypt')
const crypto=require('crypto')
exports.resetpasswordtoken=async(req,res)=>{
    try{
        const{email}=req.body;  
    if(!email)
    {
       return  res.json({
            success:false,
            message:"Email required"
        })
    }
    const user=await User.find({email});
    if(!user)
    {
        return res.status(401).json({
            success:false,
            message:"User not signed in"
        })
    }
    const token=crypto.randomUUID();
    const updateduser=await User.findOneAndUpdate(
       
       {email},{token:token,
       resetpasswordtoken:Date.now()+5*60*1000},{new:true}
        
    )
    const url=`https://localhost:271017/resetpassword/${token}`
    await mailsender(email,"Reset Password",`Password rest link - ${url}`);
    return res.json({
        success:true,
        message:"Email sent successfully",
        token
    })
    }
    catch(error)
    {
         console.log("Some error encountered while sending email",error)
    }
}
exports.resetpassword=async(req,res)=>{
    try{
        const {token,newpassword,confirmnewpassword}=req.body;
        if(newpassword!=confirmnewpassword)
        {
            return res.status(401).json({
                success:false,
                message:"Password and confirmnewpassword do not match"
            }) 
        }
    
        const userdetails=await User.findOne({token});
        if(!userdetails)
        {
            return res.status(400).json({
                success:true,
                message:"Invalid token"
            })
        }
        if(userdetails.resetpasswordtoken<Date.now())
        {
            return res.status(400).json({
                success:true,
                message:"Token expired "
            })
        }
        const hatchedpassword=await bcrypt.hash(newpassword,10);
        const user=await User.findOneAndUpdate({token},{password:hatchedpassword},{new:true});
        return res.status(200).json({
            success:true,
            message:"Password reset successfully"
        })
    }
    catch(error)
    {
         console.log(error);
    }

}