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
        <div className='flex'>
            <p>Nanny.Services</p>
            <AppBar />
            {isLog ? <UserMenu /> : <AuthNav />}


        </div >
    )
}
export default Header;