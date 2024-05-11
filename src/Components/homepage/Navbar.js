import React, { useEffect } from 'react';
import image from '../../assets/video/Logo.png';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import { NavbarLinksn } from './Navlinks';
import { useSelector } from 'react-redux';
import { apiConnector } from '../../services/apiconnector';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/operations/Authapi';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const { totalItems } = useSelector((state) => state.cart);
console.log("grgrg",token)
  useEffect(() => {
    const fetchSublinks = async () => {
      try {
        // Fetch sublinks logic here
      } catch (error) {
        console.error('Error fetching sublinks:', error);
      }
    };

    fetchSublinks();
  }, []);
  function calldispatch()
  {
    return dispatch(logout(navigate))
  }

  return (
    <div className='flex flex-row gap-32 pl-24 pt-4 border-b-[1px] border-b-white '>
      <div className='pb-4'>
        <img src={image} alt="Logo" />
      </div>
      <div className='text-gray-200 gap-16 flex flex-row pl-64'>
        <div className='hover:text-yellow-400 '>
          <Link to='/'><button>Home</button></Link>
        </div>
        <div className='hover:text-yellow-400'>
          <Link to='/about'><button>About</button></Link>
        </div>
        <div className='hover:text-yellow-400'>
          <Link to='/contact'><button>Contact</button></Link>
        </div>
      </div>
      <div className='flex flex-row gap-6 ml-72 bg-yellow'>
        {token==null ? (
          <>
            <Link to='/login'><button className='bg-white rounded-md w-[60px]'>Log in</button></Link>
            <Link to='/signup'><button className='bg-white rounded-md w-[60px]'> Sign up</button></Link>
          </>
        ) : (
          <>
            <button onClick={calldispatch}  className='bg-white rounded-md w-[60px]'>Log out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

