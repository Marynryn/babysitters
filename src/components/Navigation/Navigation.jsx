import { NavLink } from 'react-router-dom';


import { IsLoggedIn } from 'helpers/isLoggedIn';


export const Navigation = () => {


    return (
        <nav className=' text-center xl:mr-24'>
            <NavLink className="font-normal text-base mr-8 xl:mr-10 " to="/">
                Home
            </NavLink>

            <NavLink className="font-normal text-base " to="/nannies">
                Nannies
            </NavLink>
            {IsLoggedIn() && (<NavLink className="font-normal text-base" to="/favorites">
                Favorites
            </NavLink>)}
        </nav>
    );
};