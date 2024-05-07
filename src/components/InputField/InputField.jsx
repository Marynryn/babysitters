import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ name, placeholder }) => {
    const { register } = useFormContext();

    return (
        <div className='border border-border-gray w-full h-12 mb-4 flex items-center rounded-xl relative'>
            <input className=' bg-white pl-4 focus:border-teal-900 w-full h-full rounded-xl placeholder-black text-base font-normal text-black' type="text" {...register(name)} placeholder={placeholder} />

        </div>
    );
};

export default InputField;
