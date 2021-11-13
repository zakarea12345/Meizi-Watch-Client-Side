import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const ShowReview = (props) => {
   const {rating, name, message} = props.review;
    return (
        <Col md={4} sm={6} xs={12} className="card-part">
        <Card className="card shadow-lg" style={{height:"400px"}}>
          <Card.Body>
            <Card.Title>{message}</Card.Title>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            <Card.Text className="card-description">
               -By {name}
            </Card.Text>
          </Card.Body>
        </Card>
       </Col>
    );
};

export default ShowReview;