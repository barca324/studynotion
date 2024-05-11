const mongoose=require('mongoose');
const mailsender=require('../utils/sendmailer')
const otpschema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now(),
        expires:5*60
       
    },
    
  

})
async function sendemail(email,otp)
{
    try{
      const mailresponse=await mailsender(email,"Verification email from Study Notion",`Your otp is ${otp}`);
      console.log(mailresponse)
    }
    catch(error)
    {
        console.log(error)
    }
}
otpschema.pre("save",async function(next){
    await sendemail(this.email,this.otp);
    next();
})

module.exports=mongoose.model("OTP",otpschema)