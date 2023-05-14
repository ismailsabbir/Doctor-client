import React from 'react';
import './Providecare.css';
import image1 from '../../../../src/images/background.avif';
import image2 from '../../../../src/images/doctor1.avif';
import logo from '../../../../src/images/logo1.webp';
import logo2 from '../../.././images/logo2.png';
const Providecare = () => {
    return (
        <div className='care-container'>
        <div className='care-left'>
        <div className='top-image'>
            <img src={image1} alt='not found'/>
        </div>
        <div className='bottom-image'>
            <img src={image2} alt='not found'/>
        </div>

        </div>
        
        <div className='care-right'>
        <h6 id='what-do'>WHAT WE DO</h6>
        <h1 id='health-care'>We provide top quality healthcare.</h1>
        <p className='care-text'>Dicta sunt explicabo. Nemo enim ipsam voluptatem <br/> quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
        <div className='right-left'>
            <div className='right-left-image'>
                <img src={logo} alt='not found'/>
            </div>
            <div>
                <h5>Progressive Clinic</h5>
                <p>Natus error sit voluptatem accus antium dolorem.</p>
            </div>
        </div>
        <div className='right-left'>
            <div className='right-left-image'>
                <img src={logo2} alt='not found'/>
            </div>
            <div>
                <h5>Progressive Clinic</h5>
                <p>Natus error sit voluptatem accus antium dolorem.</p>
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default Providecare;