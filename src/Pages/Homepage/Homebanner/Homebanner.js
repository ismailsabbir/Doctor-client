import React from 'react';
import './Homebanner.css';
import Carousel from 'react-bootstrap/Carousel';
// import image from '../../../images/bannerl.avif';
// import image1 from '../../../images/dark2.avif';
// import image2 from '../../../images/dark3.avif';
import image4 from '../../../images/newbanner.jpg';
import image5 from '../../../images/newbanner2.jpg';
import image6 from '../../../images/newbanner3.jpg';
import { Link } from 'react-router-dom';

const Homebanner = () => {
    return (
        <div className='home-banner-container'>
        <Carousel className='carouselss'>
      <Carousel.Item interval={3000} className='c-item'>
        <img
          className="d-block w-100 c-image"
          src={image4}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-text'>
        <h1>We safeguard your</h1>
          <h1> health & beauty</h1>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt  dolore magna aliqua quis nostrud exerc.</p>
        <Link className='btn-link' to='/appoinment'>
          <button className='home-btn'>MAKE AN APPOINMENT</button>
        </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className='c-item'>
        <img
          className="d-block w-100 c-image"
          src={image5}
          alt="Second slide"
        />
        <Carousel.Caption className='carousel-text'>
        <h1>We safeguard your</h1>
          <h1> health & beauty</h1>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.</p>
        <Link to='/appoinment'>
          <button className='home-btn'>MAKE AN APPOINMENT</button>
        </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-image"
          src={image6}
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-text'>
        <h1>We safeguard your</h1>
          <h1> health & beauty</h1>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.</p>
        <Link to='/appoinment'>
          <button className='home-btn'>MAKE AN APPOINMENT</button>
        </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
        </div>
    );
};

export default Homebanner;