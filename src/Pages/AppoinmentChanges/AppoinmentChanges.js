import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, Navigate, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/UserContext';

const AppoinmentChanges = () => {
  const storeappoinment=useLoaderData();
  console.log(storeappoinment);
  const [newappoinmentdata,setnewappoinment]=useState(storeappoinment);
    const{user}=useContext(AuthContext);
  const navigate=useNavigate();
  console.log(user)
    const appoinment=useLoaderData();
    console.log(appoinment);
    const[services,setservices]=useState([]);
    useEffect(()=>{
      fetch('https://doctor-server-ismailsabbir.vercel.app/services')
      .then(req=>req.json())
      .then(data=>setservices(data));
  },[]);
  console.log(services);
  const handleupdate=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const date=event.target.date.value;
    const servicestype=event.target.service.value;
    const appoiment={name,email,date,servicestype};
    console.log(appoiment);
    if(user?.uid){
      fetch(`https://doctor-server-ismailsabbir.vercel.app/appoinment/${appoinment._id}`,{
        method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(appoiment)
      })
      .then(req=>req.json())
      .then(data=>{console.log(data);
      const newappoinment=[...newappoinmentdata,data];
      setnewappoinment(newappoinment);
      })
      navigate('/appoinmentdetails');
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
            <Form onSubmit={handleupdate}>
            <Form.Group className="mb-3">
        <Form.Label>Enter name</Form.Label>
        <Form.Control placeholder="Name" type='text' name='name' defaultValue={user.displayName}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter email</Form.Label>
        <Form.Control placeholder="Email" type='email' name='email' defaultValue={user.email}/>
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

      <input className='appoinment-btn' type="submit" value="Update Appoinment"/>
      <Link to='/appoinmentdetails'> <button className='appoinment-btn'> Your Appoinment</button></Link>
            </Form>
            </div>

            </div>
        </div>
        <div className='extra'>

        </div>
        </div>
    );
};

export default AppoinmentChanges;