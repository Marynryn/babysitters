import { NavLink, useLocation } from 'react-router-dom';


import { IsLoggedIn } from 'helpers/isLoggedIn';
import { useEffect, useState } from 'react';


export const Navigation = () => {
    const location = useLocation();
    const [activePage, setActivePage] = useState('');


    useEffect(() => {

        setActivePage(location.pathname);
    }, [location]);

    return (
        <nav className='lg:items-center  text-center'>
            <ul className='block lg:h-10 lg:flex text-center mb-4 lg:mb-0 lg:justify-center  lg:items-center '>
                <li id="1" className='font-normal mb-3 lg:mb-0 text-base lg:mr-8 xl:mr-10 '>
                    <NavLink to="/">
                        Home
                    </NavLink></li>
                <li id="2" className={`font-normal text-base ${activePage === '/nannies' ? ' relative after:content-[" "] after:w-2 after:h-2 after:bg-white after:rounded-full after:top-6 after:right-6  after:absolute' : ''}`} >
                    <NavLink to="/nannies">
                        Nannies
                    </NavLink></li>
                <li id="3" className={`font-normal text-base lg:ml-8 ${activePage === '/favorites' ? ' relative after:content-[" "] after:w-2 after:h-2 after:bg-white after:rounded-full after:top-6 after:right-6  after:absolute' : ''}`} >  {IsLoggedIn() && (<NavLink className="" to="/favorites">
                    Favorites
                </NavLink>)}</li>

            </ul>


        </nav >

    );
};