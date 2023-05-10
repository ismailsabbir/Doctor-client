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
const Headers = () => {
  const {user,userlogout}=useContext(AuthContext)
  console.log(user?.displayName);
  const handlelogout=()=>{
    userlogout()
    .then(()=>{
      console.log('logout sucessfull')
    })
    .catch((error)=>{
      console.error(error);
    })
  }
    return (
      <div className='navbar-container ' fixed="top">
      <Headertop></Headertop>
      <Navbar  expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-item' to='/home'>Home</Link>
            <Link className='nav-item' to='/about'>About</Link>
            <Link className='nav-item' to='/services'>Services</Link>
            <Link className='nav-item' to='/contact'>Contact</Link>
            <Link className='nav-item' to='/blog'>Blog</Link>
            <Link className='nav-item' to='/signup'>Signup</Link>
            {
              user?.email? 
              <Link className='nav-item' onClick={handlelogout} >LogOut</Link>:
              <Link className='nav-item' to='/login'>Login</Link>
            }


          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='social-icons'>
          <Link  to='/appoinment'><button className='appoinment-btn'>MAKE APPOINMENT</button></Link>
            <TiSocialFacebook className='social-icon'></TiSocialFacebook>
            <TiSocialTwitter className='social-icon'></TiSocialTwitter>
            <MdOutlineWhatsapp className='social-icon'></MdOutlineWhatsapp>
            {user?.email && <span className='user-infor'><FaUserCircle className='user-icon'></FaUserCircle>{user?.displayName}</span>}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    );
};

export default Headers;