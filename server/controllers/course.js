const Course=require('../models/course');
const Tag=require('../models/tags');
const imageuploader=require('../utils/imageuploader');
const User=require('../models/user')
exports.createcourse=async(req,res)=>{
     const{name,description,price,instructor,tag}=req.body;
     const thumbnail=req.files.thumbnail;
     if(!name || !description || !price || !thumbnail || !instructor)
     {
        return res.json({
            success:false,
            message:"Fields cant be left empty"
        })
     }
     const userid=req.user.id;
     console.log(userid);
     const userdetails=await User.findById({userid});
     if(!userdetails)
     {
        return res.json({
            success:false,
            message:"Instructor not registered"
        })
     }
    const tagdetails=await Tag.findById({tag});
    if(!tagdetails)
    {
        return res.json({
            success:false,
            message:"Tag invalid"
        })
    }
    const thumbnailimage=await imageuploader(thumbnail,"Study notion")
    const newcourse={
        name,
        description,
        price,
        instructor:userdetails._id,
        tag:tagdetails._id,
        thumbnail:thumbnailimage.secure_url
    }
    await User.findByIdAndUpdate({_id:userdetails._id},{
        $push:{
            courses:newcourse._id
        }},{new:true}
    )
    return res.status(200).json({
        success:true,
        message:"Course created",
        newcourse
    })
}