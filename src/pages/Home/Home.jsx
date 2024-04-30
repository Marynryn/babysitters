import Button from "components/Button/Button";
import Header from "components/Header.jsx/Header";

import sprite from "svg/symbol-defs.svg";
import { NavLink } from 'react-router-dom';


export default function Home() {


    return (
        <div className="">
            <Header />
            <h1>Make Life Easier for the Family:</h1>
            <p>Find Babysitters Online for All Occasions</p>
            <NavLink to="/nannies" >
                <Button>Get started
                    <svg className="" width={16} height={16}>
                        <use href={`${sprite}#icon-arrow-up-right2`} />

                    </svg>
                </Button>
            </NavLink>
            <div></div>

        </div>
    );
}
