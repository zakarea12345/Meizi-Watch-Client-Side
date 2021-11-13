import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(()=>{
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);
    const handleApproveStatus = key => {
        const url = `https://obscure-shore-04909.herokuapp.com/orders/${key}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Order Status Updated Successfully');
                    // For Refreshing Page
                    window.location.reload();
                }
            })
    }
    return (
        
        <div>
            <Navigation></Navigation>
              <Container>
                  <h1 style={{textAlign:"center"}}>Manage All Orders</h1>
                  <h4 style={{textAlign:"center",marginBottom:"20px"}}>Total Order Collection:{orders.length}</h4>

                  <Table striped bordered hover>
                    <thead>
                     <tr>
                       <th>Name</th>
                       <th>Product Name</th>
                       <th>Order Status</th>
                       <th>Approve</th>
                     </tr>
                    </thead>
                    <tbody>
                      
                      {
                          orders.map(
                             order => <tr
                             key={order._id}>
                                 <td>{order.name}</td>
                                 <td>{order.order.productName}</td>
                                 <td>{order.orderStatus}</td>
                                 <td ><button onClick={()=> handleApproveStatus(order._id)}>Approve</button></td>

                             </tr>
                          )
                      } 
                      
                       {/* 
                      */}
                      
                    
                    </tbody>
                    </Table>
              </Container>


            <Footer></Footer>
        </div>
    );
};

export default ManageAllOrders;