const mongoose=require('mongoose');
const ratingschema=new mongoose.Schema({
   rating:{
    type:Number,
    required:true
   },
   review:{
    type:String,
    required:true
   },
   madeby:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   }
})
module.exports=mongoose.model("Ratingandreview",ratingschema);