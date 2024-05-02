
import React from 'react';


const Button = ({ children, onClick, type }) => {

    return (
        <button type={type} onClick={onClick} className=
            ' bg-teal-900  border  border-stone-200 rounded-full  '>
            {children}
        </button>
    );
};

export default Button;
