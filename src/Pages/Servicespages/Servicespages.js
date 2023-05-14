import React, { useEffect, useState } from 'react';
import './Servicespages.css'
import Services from '../Homepage/Services/Services';
import Subscribes from './Subscribes/Subscribes';
const Servicespages = () => {
    const[services,setservices]=useState([]);
    useEffect(()=>{
      fetch('https://doctor-server-ismailsabbir.vercel.app/services')
      .then(req=>req.json())
      .then(data=>setservices(data));
    },[])

    return (
      <div>
     <div className='services-container'>
     <div className='service-head'>
     <div className='services-head-left'>
     <h5>TOP SERVICES</h5>
     <h1>We are a progressive  medical clinic.</h1>
     </div>
     <div className='services-head-right'>
      <p>
      Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>
      <p>
      Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam.
      </p>
     </div>

     </div>
      <div className='row '>
        {
         services.map((service)=>(
        <Services data={service}></Services>
        ))
        }
        </div>
        </div>
        <div className='services-banner'>
          <h6>MODERN CLINIC</h6>
          <h1>We provide quality health</h1>
          <h1>care for our clients.</h1>
        </div>
        <Subscribes></Subscribes>
      </div>

    );
};

export default Servicespages;