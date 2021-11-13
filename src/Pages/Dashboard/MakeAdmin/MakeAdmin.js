import React, { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    
                }

            })

        e.preventDefault()
    }
    return (
        <div>
            <Navigation></Navigation>
              <form className="purchase-now-form" onSubmit={handleAdminSubmit}>
                  <h1 style={{textAlign:'center'}}>Make Admin</h1>
                  <input
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                 <div style={{textAlign:'center'}}>
                 <button type="submit" >Submit</button>
                 </div>
               </form> 
               <Container>
                  {
                      success && <Alert variant="success">
                      Admin Created Successfully!
                    </Alert> 
                  }
               </Container>

            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;