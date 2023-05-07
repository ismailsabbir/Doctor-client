import React from 'react';
import './Blogpages.css'
const Blogpages = () => {
    return (
        <div className='blog-container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-8 blog-left'>
                    <h1>blog-left</h1>
                </div>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-4 blog-right'>
                <h1>blog right</h1>
                </div>
            </div>
        </div>
    );
};

export default Blogpages;