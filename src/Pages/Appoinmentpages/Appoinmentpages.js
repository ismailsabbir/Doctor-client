import React, { useContext, useEffect, useState } from 'react';
import './Appoinmentpages.css';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
const Appoinmentpages = () => {
    const [services,setservices]=useState([]);
    const{user}=useContext(AuthContext);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('https://doctor-server-ismailsabbir.vercel.app/services')
        .then(req=>req.json())
        .then(data=>setservices(data));
    },[])

    console.log(services);
    const appoinmenthandle=(event)=>{
        event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const date=event.target.date.value;
    const servicestype=event.target.service.value;
    const appoiment={name,email,date,servicestype};
    if(user?.uid){
      fetch('https://doctor-server-ismailsabbir.vercel.app/appoinment',{
        method: 'POST',
        body: JSON.stringify(appoiment),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then((req)=>req.json())
    .then(data=>console.log(data))
    console.log(appoiment);
    navigate('/appoinmentdetails')
    }
    else{
      navigate('/login');
    }

    }
    return (
        <div>
        <div className='appoinment-container'>
            <div className='relative h-screen bg-black/60 appoinment-text'>
            <div className='appoinment-left'>
                <p>Provide Comprehensive</p>
                <h3>
                MAKE AN APPOINTMENT
                </h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam adipiscing elit orem.
                </p>
            </div>
            <div className='appoinment-right'>
            <Form onSubmit={appoinmenthandle}>
            <Form.Group className="mb-3">
        <Form.Label>Enter name</Form.Label>
        <Form.Control placeholder="Name" type='text' name='name'/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter email</Form.Label>
        <Form.Control placeholder="Email" type='email' name='email' value={user.email}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>What types of services?</Form.Label>
        <Form.Select name='service'>
          {
            services.map((serv)=>(
                <option>{serv.name}</option>
            ))
          }
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Selected Date</Form.Label>
        <Form.Control className='date-input'  type='date' name='date'/>
      </Form.Group>

      <input className='appoinment-btn make-small-appoi' type="submit" value="Make Appoinment"/>
      <Link to='/appoinmentdetails'> <button className='appoinment-btn make-small-appoi'> Your Appoinment</button></Link>
            </Form>
            </div>

            </div>
        </div>
        <div className='extra'>

        </div>
        </div>

    );
};

export default Appoinmentpages;