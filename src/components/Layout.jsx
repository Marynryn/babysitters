import { Outlet } from 'react-router-dom';



import { Suspense } from 'react';
import Loader from './Loader/Loader';


export const Layout = () => {
    return (
        <div className='h-full w-full md:w-1/2 lg:w-1/3 xl:w-1/4' >

            <Suspense fallback={<Loader />}>
                <Outlet />

            </Suspense>
        </div>
    );
};