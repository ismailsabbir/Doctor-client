import React from 'react';
import './Imagegallaer.css';
import image1 from '../../../../src/images/post1.jpg';
import image2 from '../../../../src/images/post2.jpg';
import image3 from '../../../../src/images/post3.jpg';
import image4 from '../../../../src/images/post4.jpg';
import image5 from '../../../../src/images/post5.jpg';
import image6 from '../../../../src/images/doctor1.avif';
import image7 from '../../../../src/images/doctorprofile.jpg';
import image8 from '../../../../src/images/galary.jpg';
// import image9 from '../../../../src/images/bannerl.avif';
import image10 from '../../../../src/images/blog2.jpg';

const ImageGallary = () => {
    return (
        <div className='galarry-containers'>
            <div className='gallary-first'>
               <img src={image1} alt='not found'/>
               <img src={image2} alt='not found'/>
               <img src={image3} alt='not found'/>
            </div>
            <div className='gallary-first'>
               <img src={image4} alt='not found'/>
               <img src={image5} alt='not found'/>
               {/* <img src={image9} alt='not found'/> */}
               <img src={image10} alt='not found'/>
            </div>
            <div className='gallary-first'>
               <img src={image6} alt='not found'/>
               <img src={image7} alt='not found'/>
               <img src={image8} alt='not found'/>
            </div>
        </div>
    );
};

export default ImageGallary;