import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Banner = () => {
    return (
        <div className="home-banner mx-auto">
            <Container >
               <Row>
                 <Col sm={12} md={8}>
                    <h4 className="banner-header">NEW ARRIVALS</h4>
                    <h1 className="banner-title">
                        Our Best Collections
                    </h1>
                    <button className="banner-btn mx-auto">
                        Explore More <FontAwesomeIcon icon={faArrowRight} />
                     </button>
                 </Col>
               </Row>
            </Container>
        </div>
    );
};

export default Banner;