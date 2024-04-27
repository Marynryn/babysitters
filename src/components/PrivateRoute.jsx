import { IsLoggedIn } from 'helpers/isLoggedIn';
import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = IsLoggedIn();

    return user ?
        <Component />
        :
        <Navigate to="/" />


};
export default PrivateRoute;