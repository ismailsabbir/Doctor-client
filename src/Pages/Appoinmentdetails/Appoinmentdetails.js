import React, { useContext, useEffect, useState } from 'react';
import './Appoinmentdetails.css';
import { AuthContext } from '../../Context/UserContext';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
const Appoinmentdetails = () => {
  const {user}=useContext(AuthContext);
    const [appoinment,setappoinment]=useState([]);
    useEffect(()=>{
        fetch(`https://doctor-server-ismailsabbir.vercel.app/appoinment?email=${user.email}`)
        .then(req=>req.json())
        .then(data=>setappoinment(data))
    },[user.email]);
    const[displayappoinment,setdisplayappoinment]=useState(appoinment);
    const delateappoinment=(dataaa)=>{

      console.log(dataaa);
      const agree=window.confirm('Delate Appoinment ???');
      if(agree){
        fetch(`https://doctor-server-ismailsabbir.vercel.app/appoinment/${dataaa._id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.deletedCount>0){
            alert('delated');
          }
          // const remingappoinment=displayappoinment.filter(appoin=>appoin._id !== dataaa._id);
          // console.log(remingappoinment);
          // setdisplayappoinment(remingappoinment);
        })
      }
    }
    return (
        <div className='appoinment-details-con'>
        <div className='apoinmentdetail-hed '>
        <h1>Appoinment dttails</h1>
        </div>

            <Table striped bordered hover class="table" responsive="sm">
      <thead>
        <tr>

          <th>Client name</th>
          <th>Client Email</th>
          <th>Services Name</th>
          <th>Appoinment Date</th>
          <th>Appoinment Edit</th>
          <th>Appoinment  Delate</th>
        </tr>
      </thead>
      <tbody>
      {
        appoinment.map((appo)=>(
            <tr  key={appo._id}>
          <td>{appo.name}</td>
          <td>{appo.email}</td>
          <td>{appo.servicestype}</td>
          <td>{appo.date}</td>
          <td><Link to={`/appoinmentupdate/${appo._id}`}><button className='appoinment-edit'>Change Appoinment</button></Link></td>
          <td><Link onClick={()=>delateappoinment(appo)}><button className='appoinment-edit'>Delate Appoinment</button></Link></td>
        </tr>
        ))
      }


      </tbody>
    </Table>
        </div>
    );
};

export default Appoinmentdetails;