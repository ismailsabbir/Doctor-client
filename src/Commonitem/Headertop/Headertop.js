import React from 'react';
import './Headertop.css';
import image from '../../../src/images/logo.png';
import { BiTime} from "react-icons/bi";
import { TfiMobile} from "react-icons/tfi";
import { GoLocation} from "react-icons/go";
const Headertop = () => {
    return (
        <div className='navbar-top-container'>
        <div className='nvbar-top-left'>
            <img src={image}alt='not found'/>
        </div>
        <div className='navbar-top-right'>
            <div className='right-time'>
                <BiTime className='time'></BiTime>
                <div className='nav-bar-text'>
                    <p>Monday - Friday 08:00-19:00</p>
                    <p className='specil'>Saturday and Sunday - CLOSED</p>
                </div>
            </div>
            <div className='right-phone'>
                <TfiMobile className='mobile'></TfiMobile>
                <div className='nav-bar-text'>
                    <p>	+0800 2336 7811</p> 
                    <p>Office@Medicare.com</p>
                </div>
            </div>
            <div className='right-location'>
                <GoLocation className='location'></GoLocation>
                <div className='nav-bar-text'>
                    <p>	32th Dhanmondi </p>
                    <p>Dhaka, 1203</p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Headertop;