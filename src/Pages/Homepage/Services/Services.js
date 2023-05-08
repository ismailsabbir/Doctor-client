import React from 'react';
import './Services.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Services = (props) => {
    const product=props.data;
    console.log(product);
    return (
        <div className='col col-12 col-sm-12 col-md-12 col-lg-4 service-card'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='service-image' src={product.picture} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className='service-text'>
        {product.about.slice(0,65)}---
        </Card.Text>
        <div className='card-bottom'>
            <Link>
            <Button variant="primary">Read more</Button>
            </Link>
            <p>{product.balance}</p>
        </div>

      </Card.Body>
    </Card>

        </div>
    );
};

export default Services;