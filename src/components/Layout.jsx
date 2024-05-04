import { Outlet } from 'react-router-dom';



import { Suspense } from 'react';
import Loader from './Loader/Loader';


export const Layout = () => {
    return (
        <div className=' w-full ' >

            <Suspense fallback={<Loader />}>
                <Outlet />

            </Suspense>
        </div>
    );
};