import AppBar from 'components/AppBar/AppBar'

import React, { useEffect, useState } from 'react'

import { IsLoggedIn } from '../../helpers/isLoggedIn';

import { auth } from 'firebase.js';
import UserMenu from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';


export const Header = () => {


    const [isLog, setIsLog] = useState(IsLoggedIn());

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsLog(!!user);
        });

        return unsubscribe;
    }, []);


    return (
        <div className=''>
            <div className=''>
                <p className='font-medium text-medium mb-4'>Nanny.Services</p>
                <AppBar />
            </div>
            {isLog ? <UserMenu /> : <AuthNav />}


        </div >
    )
}
export default Header;