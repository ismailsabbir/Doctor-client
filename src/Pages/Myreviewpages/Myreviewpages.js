import React, { useContext, useEffect, useState } from 'react';
import './Myreviewpages.css';
import { AuthContext } from '../../Context/UserContext';
import {FaUserCircle,FaStar } from "react-icons/fa";
const Myreviewpages = () => {
    const {user}=useContext(AuthContext);
    const [specificreview,setspecificreview]=useState([]);
    console.log(specificreview);
    useEffect(()=>{
        fetch(`https://doctor-server-ismailsabbir.vercel.app/review?email=${user.email}`)
        .then(req=>req.json())
        .then(data=>setspecificreview(data))
    },[user?.email])
    return (
        <div className='specific-review-container'>
        <h5 className='number-review'>Numbers of Review {specificreview.length}</h5>
        {
                specificreview.map((review)=>(
                    <div className='single-rev-con'>
                    <div className='single-review'>
                    <div className='single-revwer'>
                    <FaUserCircle></FaUserCircle>
                    <h6>{review.name}</h6>
                    </div>
                    <div className='review-type-review'>
                    <h6>{review.servicestype}</h6>
                        <p>{review.review}</p>
                    </div>

                        <div className='single-review-star'>
                        <p>Ratting:{review.ratting}</p>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                            <FaStar className='star'></FaStar>
                        </div>
                    </div>
                    <div className='review-detate-edit'>
                    <button>Edit review</button>
                    <button>Detalt review</button>
                    </div>

                    </div>

                ))
            }
        </div>
    );
};

export default Myreviewpages;