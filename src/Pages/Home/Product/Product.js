import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Product.css';

const Product = (props) => {
    const {productName, price, description, imgUrl} = props.product;
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
            <Card.Footer>
              <Button>Buy Now</Button>
            </Card.Footer>
          </Card>
        </Col>
    );
};

export default Product;