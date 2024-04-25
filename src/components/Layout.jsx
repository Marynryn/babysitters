import { Outlet } from 'react-router-dom';

import { AppBar } from './AppBar/AppBar';
import css from "./Layout.module.css"
import { Suspense } from 'react';
import Loader from './Loader/Loader';


export const Layout = () => {
    return (
        <div className={css.layout} >
            <AppBar />
            <Suspense fallback={<Loader />}>
                <Outlet />

            </Suspense>
        </div>
    );
};