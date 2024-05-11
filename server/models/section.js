const mongoose=require('mongoose');
const sectionschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subsection:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Subsection"
    }]
});
module.exports=mongoose.model("Section",sectionschema)