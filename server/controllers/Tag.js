const Tags=require('../models/tags');
exports.createtag=async(req,res)=>{
    try{
        const {name,description}=req.body;
    if(!name || !description)
    {
        return res.json({
            success:false,
            message:"Fill in all details"
        })
    }
    const newtag=await Tags.create({
        name,description
    })
     return res.json({
        success:true,
        message:"Tag created successfully"
    })
    }
    catch(error){
        console.log("Error while creating tag",error.message)
    }
    
}