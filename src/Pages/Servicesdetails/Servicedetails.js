import React, { useContext, useEffect, useState } from 'react';
import './Servicedetails.css'
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import ImageGallary from './Imagegallary/ImageGallary';
import { BsFillCameraVideoFill,BsFillChatRightTextFill,BsFacebook,BsWhatsapp } from "react-icons/bs";
import {AiFillClockCircle,AiFillGoogleCircle,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai";
import {FaUserCircle,FaStar } from "react-icons/fa";
import {RiMessage3Fill} from "react-icons/ri";
import { AuthContext } from '../../Context/UserContext';
const Servicedetails = () => {
  const{user}=useContext(AuthContext);
    const[services,setservices]=useState([]);
    const[review,setreview]=useState([]);
    const data=useLoaderData();
    const navigate=useNavigate();
    console.log(data);
    useEffect(()=>{
      fetch('https://doctor-server-ismailsabbir.vercel.app/services')
      .then(req=>req.json())
      .then(res=>setservices(res))
    },[]);
    useEffect(()=>{
      fetch(`https://doctor-server-ismailsabbir.vercel.app/review/${data.name}`)
      .then((req)=>req.json())
      .then((data)=>setreview(data))
    },[data.name]);
    console.log(review);

    const reviewhandler=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const review=event.target.review.value;
        const ratting=event.target.ratting.value;
        const servicestype=event.target.service.value;
        const reviewinfo={name,email,review,ratting,servicestype};
        console.log(reviewinfo);
        if(user?.uid){
          fetch('https://doctor-server-ismailsabbir.vercel.app/review',{
            method: 'POST',
            body: JSON.stringify(reviewinfo),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(req=>req.json())
        .then(data=>console.log(data)) 
        }
        else{
          navigate('/login');
        }

    }
    return (
        <div className='servicedetails-container'>
        <div className='row'>
        <div className='col col-12 col-sm-12 col-md-12 col-lg-9 servicedetails-left'>
        <div className='doc-video'>
        <div className='documents'>
        <BsFillChatRightTextFill></BsFillChatRightTextFill>
        <h6>Documentation</h6>
        </div>
        <div className='documents'>
        <BsFillCameraVideoFill></BsFillCameraVideoFill>
        <h6>Video</h6>
        </div>
        </div>
             <h2 id='mediacl-serv'>{data.name} MEDICAL SERVICE</h2>
             <div className='post-moment'>
                <AiFillClockCircle></AiFillClockCircle>
                <p>September 8, 2015</p>
                <FaUserCircle></FaUserCircle>
                <p>By Admin</p>
                <RiMessage3Fill></RiMessage3Fill>
                <p>5</p>
             </div>
                <img id='service-image' src={data.picture} alt='not found'/>
                <p className='service-details-text'>{data.about}</p>
                <div className='link-social'>
                <div className='button-group'>
                <Link to='/services'><button>Services</button></Link>
                    <Link to='/about'><button>about</button></Link>
                    <Link to='/blog'><button>blog</button></Link>
                    <Link to='/services'><button>Services</button></Link>
                </div>
                <div className='social-icon-con'>
                    <BsFacebook></BsFacebook>
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                    <AiFillInstagram></AiFillInstagram>
                    <BsWhatsapp></BsWhatsapp>
                    <AiFillGoogleCircle></AiFillGoogleCircle>
                </div>
                </div>

                <div className='client-comment-container'>
                <Form onSubmit={reviewhandler}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' value={user?.displayName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={user?.email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <label for="exampleFormControlTextarea1">Review</label>
    <textarea class="form-control message-box" name='review' id="exampleFormControlTextarea1" rows="3"></textarea>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>What types of services?</Form.Label>
        <Form.Select name='service'>
        <option>{data.name}</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Service Reatting</Form.Label>
        <Form.Select name='ratting'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept terms and condition" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   </div>

        <div className='col col-12 col-sm-12 col-md-12 col-lg-3'>
                <h5 className='review-head'>REVIEW</h5>
                {
                  review.map(rev=>(
                    <div className='review-container'>
                    <div className='reviewer'>
                      <FaUserCircle></FaUserCircle>
                      <h6>{rev.name}</h6>
                    </div>
                      <p className='review-sev-det'>{rev.review}</p>
                      <div className='revier-ratting-con'>
                      <h6>Ratting: {rev.ratting}</h6>
                      <div className='review-star'>
                      <FaStar className='star-rev'></FaStar>
                        <FaStar className='star-rev'></FaStar>
                        <FaStar className='star-rev'></FaStar>
                      </div>
                      </div>

                    </div>
                  ))
                }
                <h5 className='services-hed'>SERVICES </h5>
                {
                    services.map((serv)=>(
                        <Link className='service-link' to={`/servicedetails/${serv._id}`}><p className='serv-link'>{serv.name}</p></Link>
                    ))
                }
        </div>

        </div>
            
        </div>
    );
};

export default Servicedetails;