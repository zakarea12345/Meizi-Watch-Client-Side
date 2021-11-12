import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'


const Footer = () => {
    const addIcon = <FontAwesomeIcon icon={faMapMarker} />
    const envIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phnIcon = <FontAwesomeIcon icon={faPhone} />
    return (
        <>
            <footer>
                <div className='foot'>
                    <Container className="p-5">
                        <Row>
                            <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                                <div className="foot-title">
                                    <h2>About us</h2>
                                </div>
                                <div className="foot-detail-1">
                                    <p>Meizi online store will be the best choice for buying world class watch.We ensure you to get the geniune products.We only sell branded watch.</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                                <div className="foot-title">
                                    <h2>Quick links</h2>
                                </div>
                                <Navbar variant="light" className="responsive-fix">
                                    <Nav className="d-block foot-nav-menu">
                                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/home" >About</Nav.Link>
                                        <Nav.Link as={Link} to="/home" >Our Service</Nav.Link>
                                        <Nav.Link as={Link} to="/home" >Contact</Nav.Link>
                                    </Nav>
                                </Navbar>
                            </Col>
                            <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                                <div className="foot-title">
                                    <h2>Supports</h2>
                                </div>
                                <ul className="foot-detail-3">
                                    <li>Contact</li>
                                    <li>History</li>
                                    <li>Careers</li>
                                    <li>Refunds</li>
                                </ul>
                            </Col>
                            <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                                <div className="foot-title">
                                    <h2>Contact info</h2>
                                </div>
                                <ul className="foot-detail-4">
                                    <li>{addIcon} 40/8 NoorJahan Road, Dhaka-1207</li>
                                    <li>{envIcon} saiakzakarea7@gmail.com</li>
                                    <li>{phnIcon} +8801797719606</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="p-3">
                    <Container>
                        <h6 style={{textAlign:'center'}} >© Copyright 2021. Made by Saiak Zakarea</h6>
                    </Container>
                </div>
            </footer>
        </>
    );
};

export default Footer;