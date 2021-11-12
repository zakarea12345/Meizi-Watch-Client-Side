import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';


const Products = () => {
    const {products} = useProducts();
    return (
        <>
          <Container className="mt-5">
            <Row>
                <p style={{textAlign:'center', color:'#A99577', letterSpacing:'0.05in'}} >OUR PRODUCTS</p>
                <h1 style={{textAlign:'center', letterSpacing:'0.05in'}} className="mb-4">Our Bestsellers</h1>
            </Row>
            <Row className="gy-5" >
                {
                    products.slice(0,6).map(
                        product => <Product
                                     product={product}
                                     key={product._id}
                                   >

                                   </Product>
                    )
                }
            </Row>
          </Container>
        </>
    );
};

export default Products;