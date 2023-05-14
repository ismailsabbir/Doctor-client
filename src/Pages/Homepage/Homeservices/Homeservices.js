import React, { useEffect, useState } from 'react';
import './homeservices.css';
import Services from '../Services/Services';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Homeservices = () => {
    const[services,setservices]=useState([]);
    useEffect(()=>{
        fetch('https://doctor-server-ismailsabbir.vercel.app/services')
        .then(req=>req.json())
        .then(data=>setservices(data));
    },[])

    const servic=services.slice(0,3);
    // console.log(servic);
    return (
        <div className='homeservice-con'>
        <div className='row '>
        <div className='col col-12 col-sm-12 col-md-12 col-lg-9'>
        <div className='row small-device-row'>
        {
         servic.map((service)=>(
        <Services data={service}></Services>
        ))
        }
        </div>
        </div>

<div className='col col-12 col-sm-12 col-md-12 col-lg-3 services-right'>
<h3>WORKING HOURS</h3>
<p>Duis scelerisque faucibus nisi sed lacinia.<br/> Curabitur ipsum elit.</p>
<div className='working-time'>
    <h6>Monday</h6>
    <p>8:00 AM – 2:30 PM</p>
</div>
<div className='working-time'>
    <h6>Tuesday</h6>
    <p>8:00 AM – 2:30 PM</p>
</div>
<div className='working-time'>
    <h6>Wednesday</h6>
    <p>8:00 AM – 2:30 PM</p>
</div>
<div className='working-time'>
    <h6>Thursday</h6>
    <p>8:00 AM – 2:30 PM</p>
</div>
<div className='working-time'>
    <h6>Friday</h6>
    <p>8:00 AM – 2:30 PM</p>
</div>
<div className='working-time'>
    <h6>Saturday</h6>
    <p>closed</p>
</div>
<div className='working-time'>
    <h6>Sunday</h6>
    <p>closed</p>
</div>
</div>
</div>
<div className='all-service-btn'>
            <Link to='/services'>
            <Button variant="primary">See All Services</Button>
            </Link>
</div>

        </div>  
    );
};

export default Homeservices;