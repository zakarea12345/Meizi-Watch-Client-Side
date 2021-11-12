import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './ExploreMore.css'

const ExploreMore = () => {
    const {products} = useProducts();
    return (
        <>
          <Navigation></Navigation>
          <Col className="explore-more-banner my-auto">
            <h1 style={{color:'white', textAlign:'center'}}>Collections</h1>
            <h1 style={{color:'white', textAlign:'center'}}>Home/Products</h1>
             
           </Col> 
                <p style={{textAlign:'center', color:'#A99577', letterSpacing:'0.05in',marginTop:"10px"}} >OUR PRODUCTS</p>
                <h1 style={{textAlign:'center', letterSpacing:'0.05in'}} className="mb-4">Our Bestsellers</h1> 
            <Container>
                  
                 <Row className="gy-5 mt-5" >
                    {
                        products.map(
                            product => <Product
                                         product={product}
                                         key={product._id}
                                       >
    
                                       </Product>
                        )
                    }
                </Row>
            </Container>
        
          <Footer></Footer>
        </>
    );
};

export default ExploreMore;