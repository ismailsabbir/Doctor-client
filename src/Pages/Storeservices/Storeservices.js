// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Services from './../Homepage/Services/Services';
import Alert from 'react-bootstrap/Alert';
import Swal from 'sweetalert2';
const Storeservices = (props) => {
    const services=props.services;
    const handleaddservices=(data)=>{
      const specificdata=data.services;
         const balance=specificdata?.balance;
    const picture=specificdata.picture;
    const name=specificdata.name;
    const about=specificdata.about;
    const dataa={balance,picture,name,about};
    console.log(dataa);
          fetch('https://doctor-server-ismailsabbir.vercel.app/services',{
          method: 'POST',
          body: JSON.stringify(dataa),
          headers: {
            'Content-Type': 'application/json'
          }
      })
      .then(req=>req.json())
      .then(data=>{
        console.log(data);
        Swal.fire(
          'Good job!',
          'You product added Sucessfuly !',
          'success'
        )
        
      })
  }

    return (
        <div className='col col-12 col-sm-12 col-md-12 col-lg-4 service-card'>
        <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" className='service-image' src={services.picture} />
     <Card.Body>
       <Card.Title>{services.name}</Card.Title>
       <Card.Text className='service-text'>
       {services.about.slice(0,65)}---
       </Card.Text>
       <div className='card-bottom'>
           <Link onClick={()=>handleaddservices({services})}>
           <Button className='add-services-btn' variant="primary">Add Services</Button>
           </Link>
           <p>{services.balance}</p>
       </div>

     </Card.Body>
   </Card>

       </div>
    );
};

export default Storeservices;