import { IsLoggedIn } from 'helpers/isLoggedIn';
import React from 'react'
import { Navigate, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const user = IsLoggedIn();
    console.log(user)
    return user ? <Component /> : <Navigate to={redirectTo} />;
};


export default PrivateRoute;