import React, { useContext } from 'react';
import './Headers.css';
import Headertop from '../Headertop/Headertop';
import Container from 'react-bootstrap/Container';
import { FaUserCircle } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { TiSocialFacebook,TiSocialTwitter } from "react-icons/ti";
import { MdOutlineWhatsapp } from "react-icons/md";
import { AuthContext } from './../../Context/UserContext';
import webicon from '../../../src/images/logo2.png';
const Headers = () => {
  const {user,userlogout}=useContext(AuthContext)
  const handlelogout=()=>{
    userlogout()
    .then(()=>{
    })
    .catch((error)=>{
      console.error(error);
    })
  }
    return (
      <div className='navbar-container ' fixed="top">
      <Headertop></Headertop>
      <Navbar fixed="top"  bg="light" className='navbar-small'  expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-item' to='/home'>Home</Link>
            <Link className='nav-item' to='/about'>About</Link>
            <Link className='nav-item' to='/services'>Services</Link>
            <Link className='nav-item' to='/contact'>Contact</Link>
            <Link className='nav-item' to='/blog'>Blog</Link>

            {
              user?.email? 
              <div className='small-nav-item'>
              <Link className='nav-item' to='/myreview'>My Review</Link>
              <Link className='nav-item' to='/addservices'>Add Services</Link>
              <Link className='nav-item' to='/signup'>Signup</Link>
              <Link className='nav-item' onClick={handlelogout} >LogOut</Link>

              </div>:
              <Link className='nav-item' to='/login'>Login</Link>

            }


          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='social-icons'>
          <div className='appoinment-btn-social'>
          <Link  to='/appoinment'><button className='appoinment-btn'>MAKE APPOINMENT</button></Link>
            <TiSocialFacebook className='social-icon'></TiSocialFacebook>
            <TiSocialTwitter className='social-icon'></TiSocialTwitter>
            <MdOutlineWhatsapp className='social-icon'></MdOutlineWhatsapp>
          </div>

            <div className="dropdown dropdown-end large-user-information">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">

          {user?.email && <span className='user-infor'><FaUserCircle className='user-icon'></FaUserCircle></span>}
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-55">
        <img className='webicon' src={webicon} alt='not fouind'/>
        <li>
          <Link className=" username">
            {user?.displayName}
          </Link>
        </li>
        <li><Link className=" username">{user?.email}</Link></li>
        <li><Link className='logoutuser' onClick={handlelogout}>Logout</Link></li>
      </ul>
    </div>
            {user?.email && <span className='user-infor large-user-information'>{user?.displayName}</span>}
          </Navbar.Text>
          <Link  to='/appoinment'><button className=' small-appoinment-btn appoinment-btn'>MAKE APPOINMENT</button></Link>
        </Navbar.Collapse>
        <div className="dropdown dropdown-end userinfo-small">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">

          {user?.email && <span className='user-infor'><FaUserCircle className='user-icon'></FaUserCircle></span>}
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-55">
        <img className='webicon' src={webicon} alt='not fouind'/>
        <li>
          <Link className=" username">
            {user?.displayName}
          </Link>
        </li>
        <li><Link className=" username">{user?.email}</Link></li>
        <li><Link className='logoutuser' onClick={handlelogout}>Logout</Link></li>
      </ul>
      
    </div>
    {user?.email && <span className='small-user-infor '>{user?.displayName}</span>}
   
      </Container>
      {/* <Link  to='/appoinment'><button className=' small-appoinment-btn appoinment-btn'>MAKE APPOINMENT</button></Link> */}
    </Navbar>

      </div>
    );
};

export default Headers;