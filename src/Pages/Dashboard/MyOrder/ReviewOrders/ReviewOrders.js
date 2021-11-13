
import React from 'react';
import { Card, Col, Spinner} from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const ReviewOrders = (props) => {
    
    const { handleRemove } = props;
    const {order, orderStatus, _id} = props.ordersDetails;
    console.log(order, orderStatus, _id)
    const {isLoading} = useAuth();
    if (isLoading) {
        return <Spinner className='my-3' animation="grow" variant="info" />;
    }
    return (
        <Col md={4} sm={6} xs={12} className="card-part">
        <Card className="card shadow-lg">
          <Card.Img variant="top" src={order?.imgUrl} />
          <Card.Body>
            <Card.Title>{order?.productName}</Card.Title>
            <Card.Title>Price:{order?.price}</Card.Title>
            <Card.Text className="card-description">
              {order?.description}
            </Card.Text>
            <Card.Text className="card-description">
              Order Status:{orderStatus}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{border:'none', background:'white'}}>
             <br />
              <button onClick={()=>handleRemove(_id)} style={{background:'black', color:'white', border:'none', padding:"8px 15px"}}>Cancel Order</button>
          </Card.Footer>
        </Card>
        </Col>
    );
};

export default ReviewOrders;