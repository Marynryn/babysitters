import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ name, placeholder }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className='border w-full h-12 mb-4 flex items-center rounded-xl relative'>
            <input className='pl-4 focus:border-teal-900 w-full h-full rounded-xl' type="text" {...register(name)} placeholder={placeholder} />
            {errors[name] && <span className="error-message">{errors[name].message}</span>}
        </div>
    );
};

export default InputField;
