import { IsLoggedIn } from 'helpers/isLoggedIn';
import React from 'react'
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const user = IsLoggedIn();
    console.log(user)
    return user ? <Component /> : <Navigate to={redirectTo} />;
};


export default PrivateRoute;