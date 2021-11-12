import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const GiveReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = () =>{
        
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
              <form className="purchase-now-form" onSubmit={handleSubmit(onSubmit)}>
                  <h1 style={{textAlign:'center'}}>Give Review</h1>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <textarea style={{display:'block',width:'40%',margin:"auto",boxShadow: "5px 11px 14px -4px #080808",border:"none",outline: "none",height:"150px",borderRadius:"3px"}} placeholder="Say something about product" {...register("message", { required: true })} />
                <br />
                <input type="submit" />
              </form> 
          </Container> 





            <Footer></Footer>
        </div>
    );
};

export default GiveReview;