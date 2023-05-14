import React from 'react';
import './ReviewUpdatePages.css';
import { useLoaderData } from 'react-router-dom';
const ReviewUpdatePages = () => {
    const review=useLoaderData();
    return (
        <div>
            <h1>Update</h1>
        </div>
    );
};

export default ReviewUpdatePages;