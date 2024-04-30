import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css"

import { IsLoggedIn } from 'helpers/isLoggedIn';


export const Navigation = () => {


    return (
        <nav>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>

            <NavLink className={css.link} to="/nannies">
                Nannies
            </NavLink>
            {IsLoggedIn() && (<NavLink className={css.link} to="/favorites">
                Favorites
            </NavLink>)}
        </nav>
    );
};