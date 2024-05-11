const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        
    },
    accountType:{
        type:String,
        required:true,
        enum:["Student","Instructor","Admin"]
    },
     courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
     }],
     profile:
     {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
     },
     token:{
        type:String
     },
     resetpasswordtoken:{
        type:Date,
    
     }
})
module.exports=mongoose.model("User",userschema);