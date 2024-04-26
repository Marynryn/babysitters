import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './Layout';
import { lazy } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';


const Home = lazy(() => import('../pages/Home/Home'));
const Nannies = lazy(() => import('../pages/Nannies/Nannies'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
export const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        {/* <Route
          path="/register"
          element={
            <RegistrationForm type='register' />
          }
        /> */}
        {/* <Route
          path="/login"
          element={
            <RegistrationForm props={'login'} />
          }
        /> */}
        {/* <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/login" component={<Favorites />} />
          }
        /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
