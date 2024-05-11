const mongoose=require('mongoose');
const subsectionschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
   description:{
    type:String,
    required:true
   },
   duration:{
    type:String,
    required:true
   },
   videourl:{
    type:String,
    require:true
   }

});
module.exports=mongoose.model("Subsection",subsectionschema)