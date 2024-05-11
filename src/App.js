import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Verifyemail from './Components/homepage/Verifyemail'
import Index from './Components/Dashboard/AddCourse/Index';

import Home from './pages/Home'
import Navbar from './Components/homepage/Navbar';
import Login from './Components/core/Login'
import SignUp from './Components/core/Signup'
import About from './Components/homepage/About'
import Contact from './Components/homepage/Contact'
import Myprofile from './Components/Dashboard/Myprofile';
import EnrolledCourses from './Components/Dashboard/EnrolledCourses';
function App() {
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col font-inter">
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/verifyemail' element={<Verifyemail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard/profile' element={<Myprofile/>}/>
        <Route path='/dashboard/getenrolledcourses' element={<EnrolledCourses/>}/>
        <Route path='/dashboard/addcourse' element={<Index/>}/>
       </Routes>
    </div>
  );
}

export default App;
