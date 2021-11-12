import React, { useState } from 'react';
import { Col, Container,Button, Row, Spinner, Alert } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import watch from '../../../images/login-img.png';
import './Login.css'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const LogIn = () => {
    
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnBlur =  e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData};
            newLoginData[field] = value;
            setLoginData(newLoginData)
    };
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }

    return (
        <>
            <Navigation></Navigation>
             <Container>
                 <Row>
                    <Col md={6} xs={12} sm={12} className="login-form">
                        <h1 className="mb-4">Please Login</h1>
                        <form action="" onSubmit={handleLoginSubmit}>
                            <input 
                              type="email"
                              onBlur={handleOnBlur}
                              name="email"
                              placeholder='Please enter your email...' />
                              <br />
                              <br />
                            <input 
                              type="password"
                              onBlur={handleOnBlur}
                              name="password"
                              placeholder='Please enter your email...' />
                              <br />
                              <br />
                              <Button type="submit" className="login-btn">Login</Button>
                              
                        </form>
                        {
                        isLoading && <Button variant="primary" disabled>
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                      </Button>
                    }  
                    {
                        user?.email && <Alert variant="success">
                        Login Successfully!
                      </Alert> 
                    }  
                    {
                        authError && <Alert variant="danger">
                            {authError}
                        </Alert>
                    }  
                        <Link to="/register">New user in meizi?Please Register.</Link>

                    </Col>    
                    <Col md={6} xs={12} sm={12} className="login">
                       <img src={watch} alt="" />
                    </Col>    
                 </Row>
             </Container>
            <Footer></Footer>
        </>
    );
};

export default LogIn;