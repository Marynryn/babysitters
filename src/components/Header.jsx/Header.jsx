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

        <div className=' flex flex-wrap justify-between items-center'>
            <p className='font-base text-medium flex items-center '>Nanny.Services</p>
            <div className='flex flex-wrap '>
                <AppBar />
                {isLog ? <UserMenu /> : <AuthNav />}
            </div>
        </div>

    )
}
export default Header;