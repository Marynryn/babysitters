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

        <div className=' m:flex m:flex-wrap  m:justify-between items-center gap-4'>
            <p className='font-base text-medium flex items-start mb-4'>Nanny.Services</p>
            <div className='m:flex m:flex-wrap  m:justify-between gap-4'>
                <AppBar />
                {isLog ? <UserMenu /> : <AuthNav />}

            </div>
        </div>

    )
}
export default Header;