
import React from 'react';
import clsx from 'clsx';

const Button = ({ children, onClick, type }) => {

    return (
        <button type={type} onClick={onClick} className={clsx(
            'py-2.5 px-5 bg-cyan-950 text-zinc-50 text-base text-center font-medium rounded-3xl',
            'hover:bg-gray-800 active:bg-gray-950'

        )} >
            {children}
        </button>
    );
};

export default Button;
