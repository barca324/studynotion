const express=require('express');
const app=express();
const cors = require('cors');
const dbconnect=require('./config/database');
const cookieparsor=require('cookie-parser')
dbconnect();
const{cloudinaryConnect}=require('./config/cloudinary');
cloudinaryConnect();
const {uploadimage}=require('./utils/imageuploader')
app.use(cors());
app.use(cookieparsor());
app.use(express.json());
const fileUpload=require('express-fileupload')
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(express.urlencoded({ extended: true }));
const router=require('./routes/signin')
const course=require('./routes/course')
const profile=require('./routes/profile')
app.use('/api/v1/auth',router)
app.use('/api/v1/profile',profile)
app.use('/api/v1/course',course)
app.listen(4000,()=>{
    console.log('Serer started')
})

app.get('/',(req,res)=>{
    res.send('This is Home Page')
})
