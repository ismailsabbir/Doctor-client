import React from 'react';
import './Headers.css';
import Headertop from '../Headertop/Headertop';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { TiSocialFacebook,TiSocialTwitter } from "react-icons/ti";
import { MdOutlineWhatsapp } from "react-icons/md";

const Headers = () => {
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
            <Link className='nav-item' to='/home'>Services</Link>
            <Link className='nav-item' to='/home'>Contact</Link>
            <Link className='nav-item' to='/home'>Blog</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='social-icons'>
            <TiSocialFacebook className='social-icon'></TiSocialFacebook>
            <TiSocialTwitter className='social-icon'></TiSocialTwitter>
            <MdOutlineWhatsapp className='social-icon'></MdOutlineWhatsapp>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    );
};

export default Headers;