import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
//`/bookNow/${_id}`
const Product = (props) => {
    const {productName, price, description, imgUrl, _id} = props.product;
    return (
        <Col md={4} sm={6} xs={12} className="card-part">
          <Card className="card shadow-lg">
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
              <Card.Title>{productName}</Card.Title>
              <Card.Title>Price:{price}</Card.Title>
              <Card.Text className="card-description">
                {description}
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{border:'none', background:'white'}}>
              <Link to={`/purchase/${_id}`}>
                <Button style={{background:'black', color:'white', border:'none'}}>Buy Now</Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
    );
};

export default Product;