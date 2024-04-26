import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css"
import Nannies from './../../pages/Nannies/Nannies';


export const Navigation = () => {


    return (
        <nav>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>

            <NavLink className={css.link} to="/nannies">
                Nannies
            </NavLink>
            {/* <NavLink className={css.link} to="/favorites">
                Favorites
            </NavLink> */}
        </nav>
    );
};