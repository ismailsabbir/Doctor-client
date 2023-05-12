import React, { useEffect, useState } from 'react';
import './AddServices.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Storeservices from '../Storeservices/Storeservices';
import Swal from 'sweetalert2';
// import images from '../../../src/images/add.jpg';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
const AddServices = () => {
  const[storeservices,setstoreservices]=useState([]);
  useEffect(()=>{
    fetch('https://doctor-server-ismailsabbir.vercel.app/storedata')
    .then(req=>req.json())
    .then(data=>setstoreservices(data))
  },[])
  console.log(storeservices);
    const handleaddservices=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=event.target.services.value;
        const about=event.target.details.value;
        const picture=event.target.image.value;
        const balance=event.target.price.value;
        const servicesinfo={name,about,picture,balance};
        console.log(servicesinfo);
        fetch('https://doctor-server-ismailsabbir.vercel.app/services',{
            method: 'POST',
            body: JSON.stringify(servicesinfo),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then((req)=>req.json())
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
      <div>
      <h3 className='new-services-hed'>New Services</h3>
              <div className='stored-product-continer'>
        <div className='addableservices row'>
          {
            storeservices.map((services)=>(
              <Storeservices services={services} key={services._id}></Storeservices>
            ))
          }
        </div>

        </div>
        <div className='services-add-hole'>
        <h4 className='services-add-hed'>Services ADD</h4>
        <div className='add-services-container'>
            <Form onSubmit={handleaddservices}>
      <Form.Group className="mb-3">
        <Form.Label>Add Services Name</Form.Label>
        <Form.Control type="text" placeholder="Enter services Name" name='services' />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Add Product image Link</Form.Label>
        <Form.Control type="text" placeholder="Enter Image" name='image' />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Add Services details information</Form.Label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Services Details" name='details'></textarea>
        {/* <Form.Control type="text" placeholder="Services Details" name='details' /> */}
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Add Services Prices</Form.Label>
    
        <Form.Control type="text" placeholder="Enter Prices" name='price' />
      </Form.Group>

      <Button className='services-add-btn' variant="primary" type="submit">
        ADD SERVICES 
      </Button>
    </Form>
        </div>
        </div>

      </div>



    );
};

export default AddServices;