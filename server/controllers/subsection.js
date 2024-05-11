const Section=require('../models/section');
const Subsection=require('../models/subsection')
const imageuploader=require('../utils/imageuploader')

exports.createsubsection=async(req,res)=>{
     const{title,description,duration,sectionid}=req.body;
     const video=req.files.videofile;
     if(!title || !description || !duration || !sectionid)
     {
        return res.json({
            success:false,
            message:"Fields cant be left empty"
        })
     }
     const uploadvideo=await imageuploader(video,"Study notion");
     const subsection=await Subsection.create({
        title,
        description,
        duration,
        videourl:uploadvideo.secure_url
     })
     const updatedsection=await Section.findByIdAndUpdate({sectionid},{
        $push:{
            subsection:subsection._id
        }
        },{new:true})
        return res.status(200).json({
            success:true,
            message:"Subsection created succeessfully"
        })
       
}    