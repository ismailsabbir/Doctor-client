import React from 'react';
import './Blogpages.css';
import image from '../../../src/images/blog1.jpg';
import image2 from '../../../src/images/blog2.jpg';
import image3 from '../../../src/images/blog3.jpg';
import post from '../../../src/images/post1.jpg';
import post1 from '../../../src/images/post2.jpg';
import post2 from '../../../src/images/post3.jpg';
import post3 from '../../../src/images/post4.jpg';
import post4 from '../../../src/images/post5.jpg';
import post5 from '../../../src/images/galary.jpg';
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { AiOutlineWhatsApp } from "react-icons/ai";
import {BsPinAngle } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Blogpages = () => {
    return (
        <div className='blog-container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-8 blog-left'>
                    <div className='blog'>
                        <img src={image} alt='not found'/>
                        <div className='blog-head'>
                            <BsPinAngle className='pin'></BsPinAngle>
                            <h1>Your Medical Records are Safe</h1>
                        </div>
                        <p className='blog-text'>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                        <div className='continue-con'>
                            <Link className='continue-btn'>CONTINUE READING</Link>
                            <div className='social-icon'>
                                <CiFacebook></CiFacebook>
                                <TiSocialTwitterCircular></TiSocialTwitterCircular>
                                <AiOutlineWhatsApp></AiOutlineWhatsApp>
                            </div>
                        </div>

                    </div>
                    <div className='blog'>
                        <img src={image3} alt='not found'/>
                        <div className='blog-head'>
                            <BsPinAngle className='pin'></BsPinAngle>
                            <h1>Your Medical Records are Safe</h1>
                        </div>
                        <p className='blog-text'>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                        <div className='continue-con'>
                            <Link className='continue-btn'>CONTINUE READING</Link>
                            <div className='social-icon'>
                                <CiFacebook></CiFacebook>
                                <TiSocialTwitterCircular></TiSocialTwitterCircular>
                                <AiOutlineWhatsApp></AiOutlineWhatsApp>
                            </div>
                        </div>

                    </div>
                    <div className='blog'>
                        <img src={image2} alt='not found'/>
                        <div className='blog-head'>
                            <BsPinAngle className='pin'></BsPinAngle>
                            <h1>Your Medical Records are Safe</h1>
                        </div>
                        <p className='blog-text'>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Quis nostrud exerci tation ulla. Ut wisi enim ad minim veniam. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                        <div className='continue-con'>
                            <Link className='continue-btn'>CONTINUE READING</Link>
                            <div className='social-icon'>
                                <CiFacebook></CiFacebook>
                                <TiSocialTwitterCircular></TiSocialTwitterCircular>
                                <AiOutlineWhatsApp></AiOutlineWhatsApp>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-4 blog-right'>
                <h4 className='archives'>News Archive</h4>
                <select className='selected'>
                    <option value='Date selected' selected>Date selected</option>
                    <option value='October 2023  (1)'>October 2023  (1)</option>
                    <option value='October 2023  (1)'>October 2023  (1)</option>
                    <option value='October 2023  (1)'>October 2023  (1)</option>
                    <option value='October 2023  (1)'>October 2023  (1)</option>
                </select>
                <h3>Categories</h3>
                <div className='categori'>
                    <p>Audio</p>
                    <p>9</p>
                </div>
                <div className='categori'>
                    <p>Gallary</p>
                    <p>4</p>
                </div>
                <div className='categori'>
                    <p>Image</p>
                    <p>1</p>
                </div>
                <div className='categori'>
                    <p>Video</p>
                    <p>10</p>
                </div>
                <h3>Recent Posts</h3>
                <div className='post'>
                    <img src={post} alt='not found'/>
                    <div className='post-text'>
                    <p>OCTOBER 18, 2015</p>
                    <h6>2015 Best USA Hospitals and Clinics</h6>
                    </div>
                </div>
                <div className='post'>
                    <img src={post1} alt='not found'/>
                    <div className='post-text'>
                    <p>OCTOBER 18, 2015</p>
                    <h6>2015 Best USA Hospitals and Clinics</h6>
                    </div>
                </div>
                <div className='post'>
                    <img src={post2} alt='not found'/>
                    <div className='post-text'>
                    <p>OCTOBER 18, 2015</p>
                    <h6>2015 Best USA Hospitals and Clinics</h6>
                    </div>
                </div>
                <div className='post'>
                    <img src={post3} alt='not found'/>
                    <div className='post-text'>
                    <p>OCTOBER 18, 2015</p>
                    <h6>2015 Best USA Hospitals and Clinics</h6>
                    </div>
                </div>
                <div className='post'>
                    <img src={post4} alt='not found'/>
                    <div className='post-text'>
                    <p>OCTOBER 18, 2015</p>
                    <h6>2015 Best USA Hospitals and Clinics</h6>
                    </div>
                </div>
                <h3>Gallary</h3>
                <div className='galary'>

                    <div className='galary1'>
                        <img src={post} alt='not found'/>
                        <img src={post1} alt='not found'/>
                        <img src={post5} alt='not found'/>
                    </div>
                    <div className='galary1'>
                        <img id='galary-mid' src={post3} alt='not found'/>
                        <img id='galary-mid' src={post4} alt='not found'/>
                        <img id='galary-mid' src={image} alt='not found'/>
                    </div>
                    <div className='galary1'>
                        <img src={image} alt='not found'/>
                        <img src={image3} alt='not found'/>
                        <img src={image2} alt='not found'/>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default Blogpages;