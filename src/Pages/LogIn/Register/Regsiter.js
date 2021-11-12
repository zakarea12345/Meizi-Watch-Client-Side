import React, { useState } from 'react';
import { Col, Container,Button, Row, Spinner, Alert } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import watch from '../../../images/login-img.png';
import './Register.css'
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Regsiter = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();
    const handleOnBlur =  e => {
            const field = e.target.name;
            const value = e.target.value;
            const newRegisterData = {...registerData};
            newRegisterData[field] = value;
            setRegisterData(newRegisterData)
    };
    const handleRegisterSubmit = e => {
        if(registerData.password !== registerData.password2){
            alert('Your Password Did Not Match')
            return
        };
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault()
        history.push('/home')
    }
    return (
        <>
        <Navigation></Navigation>
         <Container>
             <Row>
                <Col md={6} xs={12} sm={12} className="register-form">
                    <h1 className="mb-4">Please Register</h1>
                    {!isLoading&&    <form onSubmit={handleRegisterSubmit}>
                           <input 
                             type="name"
                             name="name"
                             onBlur={handleOnBlur}
                             placeholder='Please enter your name...' />
                             <br />
                             <br />
                           <input 
                             type="email"
                             name="email"
                             onBlur={handleOnBlur}
                             placeholder='Please enter your email...' />
                             <br />
                             <br />
                           <input 
                             type="password"
                             name="password"
                             onBlur={handleOnBlur}
                             placeholder='Please enter your password...' />
                             <br />
                             <br />
                           <input 
                             type="password"
                             name="password2"
                             onBlur={handleOnBlur}
                             placeholder='Please retype your password...' />
                             <br />
                             <br />
                             <Button type="submit" className="register-btn">Register</Button>
                             
                           </form>}
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
                        User Created Successfully
                      </Alert> 
                    }  
                    {
                        authError && <Alert variant="danger">
                            {authError}
                        </Alert>
                    }  
                    <Link to="/login">Already Register?Please Login.</Link>

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

export default Regsiter;