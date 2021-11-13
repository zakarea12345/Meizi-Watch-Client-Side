import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const AddProduct = () => {
     // Using Hook Form
     const { register, handleSubmit, reset } = useForm();
     const onSubmit = (data) => {
         fetch(`https://obscure-shore-04909.herokuapp.com/products`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(data)
            })
             .then(res => res.json())
             .then(data => {
                if (data.insertedId) {
                    alert('A New Product Has Been Added Successfully!!');
                    reset();
                }
             })
     }
    return (
        <div>
            <Navigation></Navigation>
            <h1 style={{textAlign:'center'}}>Add New Products</h1>
               <form className="purchase-now-form" onSubmit={handleSubmit(onSubmit)}>
                   <input {...register("productName", { required: true, maxLength: 20 })} placeholder="pproductName" />
                   <textarea 
                    style={{display:'block',width:'40%',margin:"auto",boxShadow: "5px 11px 14px -4px #080808",border:"none",outline: "none",height:"150px",borderRadius:"3px"}}
                   {...register("description")} placeholder="Description" />
                   <input type="text" {...register("price")} placeholder="price" />
                   <input {...register("imgUrl")} placeholder="imgUrl" />
                   <input type="submit" />
                </form>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;