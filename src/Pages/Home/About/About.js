import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import watch from '../../../images/watch.jpg';

const About = () => {
    return (
        <Container className="mt-5" className="about" >
           <Row className="about-section">
             <Col sm={12} md={6} className="mb-5">
                <h6 style={{letterSpacing:'0.05in'}}>ABOUT US</h6>
                <br />
                <h1>A Unique watch that fits <br /> Your Style</h1>
                <br />
                <br />
                <p>
                   The new Lawson collection is already here! This quartz <br /> Lawson Franklin 38 model, designed with simplicity <br /> and elegance, is truly a cherry on the cake. Comes in <br /> different sizes and band colors, has a stainless steel <br /> back for a personalized engraving.
                </p>
                <br />
                <button className="about-btn">Explore</button>
             </Col>
             <Col sm={12} md={6} className="about-img">
                 <img src={watch} alt="" />
             </Col>
           </Row>
        </Container>
    );
};

export default About;