import React, { useContext, useEffect, useState } from 'react';
import './Myreviewpages.css';
import { AuthContext } from '../../Context/UserContext';
import {FaUserCircle,FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Myreviewpages = () => {
    const {user}=useContext(AuthContext);
    const [specificreview,setspecificreview]=useState([]);
    useEffect(()=>{
        fetch(`https://doctor-server-ismailsabbir.vercel.app/review?email=${user.email}`)
        .then(req=>req.json())
        .then(data=>setspecificreview(data))
    },[user?.email]);

    const handledelatereview=({review})=>{
        console.log(review._id);
        const agree=window.confirm(`Delate Review ????`);
        if(agree){
            fetch(`https://doctor-server-ismailsabbir.vercel.app/review/${review._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{

                if(data.deletedCount>0){
                    alert('delate sucessful');
                }
                const remingreview=specificreview.filter(usr=>usr._id !== user._id);
                setspecificreview(remingreview);


            })
        }
    }
    return (
        <div>
        <div className='review-details-hed'>
            <h3>Your Reviews </h3>
        </div>
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
                    <Link to={`/updatereview/${review._id}`}>
                    <button>Edit review</button>
                    </Link>
                    <button onClick={()=>handledelatereview({review})}>Delate review</button>
                    </div>

                    </div>

                ))
            }
        </div>
        </div>

    );
};

export default Myreviewpages;