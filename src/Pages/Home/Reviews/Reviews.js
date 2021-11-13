import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowReview from './ShowReview/ShowReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://obscure-shore-04909.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 style={{textAlign:'center', letterSpacing:"5px"}}>Reviews:{reviews.length}</h1>
            <Container className="mb-5">
                <Row className="gy-5" >
                    {
                     reviews.map(
                         review => <ShowReview
                                     review={review}
                                     key={review._id}
                                    >
    
                                   </ShowReview>
                     )
                    }
                </Row>
            </Container>
             
        </div>
    );
};

export default Reviews;