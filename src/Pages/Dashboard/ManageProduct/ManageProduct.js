import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const ManageProduct = () => {
    const {products, setProducts} = useProducts();
    const handleRemove = key => {
        
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${key}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const newProduct = products.filter(product =>  product._id !== key);
                        setProducts(newProduct);;
                    }
                });
        }
    }
    return (
        <>
        <div>
            <Navigation></Navigation>
            <Container>
                  <h1 style={{textAlign:'center'}}>Manage Product</h1>
                  <h4 style={{textAlign:"center",marginBottom:"20px"}}>Total Product Collection:{products.length}</h4>
                  <small style={{textAlign:'center'}} >Admin Can Delete Product By Clicking The Delete Button</small>
                  <Table striped bordered hover>
                    <thead>
                     <tr>
                       <th>Name</th>
                       <th>Price</th>
                       <th>Delete</th>
                     </tr>
                    </thead>
                    <tbody>
                    {
                          products.map(
                             product => <tr
                             key={product._id}>
                                 <td>{product.productName}</td>
                                 <td>{product.price}</td>
                                 <td ><button onClick={()=>handleRemove(product._id)}>Delete</button></td>

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
        </>
    );
};

export default ManageProduct;