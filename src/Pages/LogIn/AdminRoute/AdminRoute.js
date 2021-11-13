import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading , admin} = useAuth();
    if (isLoading) {
        return <Spinner className='my-3' animation="grow" variant="info" />;
    }
    return (
        <Route
        {...rest}
        render={({ location }) => user.email && admin ? children : <Redirect
            to={{
                pathname: "/",
                state: { from: location }
            }}
        ></Redirect>
        }
        >
        </Route>
    );
};

export default AdminRoute;