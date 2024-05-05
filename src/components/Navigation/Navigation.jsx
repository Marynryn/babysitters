import { NavLink } from 'react-router-dom';


import { IsLoggedIn } from 'helpers/isLoggedIn';


export const Navigation = () => {


    return (
        <nav className=' '>
            <ul className='block lg:h-10 lg:flex text-center mb-4 lg:mb-0 lg:flex lg:justify-center  lg:items-center lg:mr-16 xl:mr-24'>
                <li className='font-normal mb-3 lg:mb-0 text-base lg:mr-8 xl:mr-10'> <NavLink to="/">
                    Home
                </NavLink></li>
                <li className='font-normal text-base'><NavLink to="/nannies">
                    Nannies
                </NavLink></li>
                <li className='font-normal text-base'>  {IsLoggedIn() && (<NavLink className="" to="/favorites">
                    Favorites
                </NavLink>)}</li>
            </ul>




        </nav>
    );
};