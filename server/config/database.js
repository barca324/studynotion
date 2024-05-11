const mongoose=require('mongoose');
const dbconnect=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/StudynotionDB').then(()=>{
        console.log('Database connected successfully')
    })
    .catch(()=>{
        console.log('Error encountered')
    })
}
module.exports=dbconnect