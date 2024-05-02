import { NavLink } from 'react-router-dom';


import { IsLoggedIn } from 'helpers/isLoggedIn';


export const Navigation = () => {


    return (
        <nav className='mb-4 text-center'>
            <NavLink className="font-normal text-base mr-10" to="/">
                Home
            </NavLink>

            <NavLink className="font-normal text-base mr-10" to="/nannies">
                Nannies
            </NavLink>
            {IsLoggedIn() && (<NavLink className="font-normal text-base" to="/favorites">
                Favorites
            </NavLink>)}
        </nav>
    );
};