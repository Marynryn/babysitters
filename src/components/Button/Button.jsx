
import React from 'react';


const Button = ({ children, onClick, type }) => {

    return (
        <button type={type} onClick={onClick} className=
            ' bg-teal-900  rounded-full ' style={{ height: "48px", border: "solid 1px", borderColor: "rgba(251, 251, 251, 0.40)" }}>
            {children}
        </button>
    );
};

export default Button;
