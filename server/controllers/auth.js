const User=require('../models/user');
const bcrypt=require('bcrypt')
const otpgenerator=require('otp-generator')
const OTP=require('../models/otp')
const jwt=require('jsonwebtoken')
exports.signup = async (req, res) => {
    try {
      const { firstname, lastname, email, password, confirmpassword, otp, accountType } = req.body;
      if (!firstname || !lastname || !email || !password || !confirmpassword || !otp || !accountType) {
        return res.status(403).json({
          success: false,
          message: "Fill in all details"
        });
      }
      if (password !== confirmpassword) {
        return res.status(401).json({
          success: false,
          message: "Password and Confirm Password do not match"
        });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(401).json({
          success: false,
          message: "User already exists"
        });
      }
      const recentOTP = await OTP.findOne({ email }).sort({ createdAt: -1 }).limit(1);
      if (!recentOTP || recentOTP.otp !== otp) {
        return res.status(401).json({
          success: false,
          message: "Invalid OTP"
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        accountType
      });
      return res.status(200).json({
        success: true,
        message: "User registered successfully",
        newUser
      });
    } catch (error) {
      console.log("User cannot be registered", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  };
  
exports.sendotp=async(req,res)=>{
    try{
        const {email}=req.body;
    const user=await User.findOne({email})
    if(user)
    {
       return res.status(401).json({
          success:false,
          message:"User already exists"
      })
    }
    var otp=otpgenerator.generate(6,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets:false,
        specialChars:false
      })
      console.log("OTP",otp);
    var result=await OTP.findOne({otp});
    console.log(result);
    while(result)
    {
        otp=otpgenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
          })
          result=await OTP.findOne({otp});
    }
    console.log(result);
    const otpf=await OTP.create({
        email,otp
    })
    console.log(otpf);
    return res.status(200).json({
        success:true,
        message:"OTP generated successfully",
        otp
    })
    }
    catch(error)
    {
        console.log('OTP not generated',error)
    }
}
exports.login=async(req,res)=>{
    try{
       const {email,password}=req.body;
       if(!email || !password)
       {
        res.status(403).json({
            success:false,
            message:"Fill in all details"
        })
       }
       const user=await User.findOne({email});
       if(!user)
       {
         return res.status(403).json({
            success:false,
            message:"Signup first"
        })
       }
       if(await bcrypt.compare(password,user.password))
       {
           const payload={
            email:user.email,
            accountType:user.accountType,
            id:user._id
            
           }
           let token=jwt.sign(payload,"madhu",{
            expiresIn:"5h"
           })
           const decode = jwt.verify(token, 'madhu');
           const userdetails=await User.findOne({email:decode.email})
           const options={
             expires:new Date(Date.now()+3*24*60*60*1000),
             httpOnly:true
           }
           res.cookie("cookie",token,options).status(200).json({
              success:true,
              token,
              decode,
              userdetails,
              message:"Logged in successfully"
           })
       }
       else{
        return res.status(401).json({
            success:false,
            message:"Wrong password"
        })
       }
    }
    catch(error)
    {
         console.log("Some error encountered while login",error)
    }
}
exports.changepassword=async(req,res)=>{
    const{oldpassword,newpassword,confirmnewpassword,email}=req.body;
    if(!oldpassword || !newpassword || !confirmnewpassword || email)
    {
       return  res.status(403).json({
            success:false,
            message:"Fill in all details"
        })
    }
    const user=await User.findOne({email})
    if(!user)
    {
        return  res.status(401).json({
            success:false,
            message:"You are not signed in.Sign in firsy"
        })
    }
    if(user)
    {
    if(newpassword!=confirmnewpassword)
    {
        return  res.status(403).json({
            success:false,
            message:"Password and confirm newpassword do not match"
        })
    }
    else{
       user.password=newpassword;
       return  res.status(200).json({
        success:true,
        message:"Password changed successfully"
    })
    }
    }
}