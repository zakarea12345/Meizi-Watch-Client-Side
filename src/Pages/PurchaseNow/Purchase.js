import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import './Purchase.css'

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { productID } = useParams();
    const {products} = useProducts();
    const matchedProduct = products.find(product => product._id == productID );
    console.log(matchedProduct)
    const {user} = useAuth();
    const {uid} = user;
    const onSubmit = data => {
        const orderView = 'Pending';
        const userID = uid;
        data.order = matchedProduct;
        data.orderStatus = orderView;
        data.userID = userID;
        console.log(data);
        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Order Has Been Placed Successfully!!');
                    reset();
                }
            })

    };
    return (
        <>
            <Navigation></Navigation>
            <Container className='my-5'>
            <Row>
                <Row>
                    <Col>
                        <div className="mb-5">
                            <h2 style={{textAlign:'center'}}>Product Detail</h2>
                        </div>
                    </Col>
                </Row>
                <Col md={6} sm={6} xs={12}>
                    <div className=" d-flex align-items-center">
                        <img src={matchedProduct?.imgUrl} alt="SingleServiceIMG" className='img-fluid' />
                    </div>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div className=" text-start d-flex align-items-center">
                    <div>
                        <h3>{matchedProduct?.productName}</h3>
                        <p>Details: <br /><span>{matchedProduct?.description}</span></p>
                        <h4>Price: <span>{matchedProduct?.price}</span></h4>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container>
          <form className="purchase-now-form" onSubmit={handleSubmit(onSubmit)}>
              <h1 style={{textAlign:'center'}}>Place-Order</h1>
            <input defaultValue={user.displayName} {...register("name")} />
  
            <input defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input placeholder="Address" defaultValue="" {...register("address")} />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input placeholder="phone number" defaultValue="" {...register("phone")} />

            
            <input type="submit" />
          </form> 
        </Container> 
            <Footer></Footer>
        </>
    );
};

export default Purchase;