const mongoose=require('mongoose');
const profileschema=new mongoose.Schema({
    gender:{
        type:String,
        enum:["Male","Female","Others"]
    },
    dateofbirth:{
        type:Date
    },
    contact:{
        type:String,
    }

})
module.exports=mongoose.model("Profile",profileschema);