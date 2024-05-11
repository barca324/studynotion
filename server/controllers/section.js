const Section=require('../models/section');   
const Course=require('../models/course');
exports.createSection=async(req,res)=>{
    try{
      const{title,courseid}=req.body;
      if(!title || !courseid)
      {
        return res.status(400).json({
            success:false,
            message:"Fields cant be left empty"
        })
      }
      const newsection=await Section.create({title})
      const updatedcouse=await Course.findByIdAndUpdate({courseid},{
        $push:{
            Section:newsection._id
        }
      },{new:true})
    }
    catch(error)
    {
        console.log('Section cant be created',error)
    }
}
exports.updatesection=async(req,res)=>{
    try{
        const{sectionname,sectionid}=req.body;
        if(!sectionname || !sectionid)
        {
          return res.status(400).json({
              success:false,
              message:"Fields cant be left empty"
          })
        }
 
        const updatedcouse=await Section.findByIdAndUpdate({sectionid},{
        title:sectionname
        },{new:true})
      }
      catch(error)
      {
        console.log('Section cant be updated',error)
      }
}
exports.deleteSection=async(req,res)=>{
    try{
        const{sectionid}=req.body;
        if( !sectionid)
        {
          return res.status(400).json({
              success:false,
              message:"Fields cant be left empty"
          })
        }
        await Section.findByIdAndDelete({sectionid})
        const updatedcourse=await Course.findByIdAndUpdate({sectionid})
    }
    catch(error)

    {
        console.log('Section cant be deleted',error)
    }
}