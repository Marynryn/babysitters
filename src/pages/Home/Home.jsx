import Button from "components/Button/Button";
import Header from "components/Header.jsx/Header";
import { useState } from "react";

import { NavLink } from 'react-router-dom';


export default function Home() {


    return (
        <div className="">
            <Header />
            <h1>Make Life Easier for the Family:</h1>
            <p>Find Babysitters Online for All Occasions</p>
            <NavLink to="/nannies" >
                <Button>Get started</Button>
            </NavLink>
            <div></div>

        </div>
    );
}
