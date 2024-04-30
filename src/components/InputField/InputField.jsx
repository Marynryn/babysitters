import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ name, placeholder }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <input type="text" {...register(name)} placeholder={placeholder} />
            {errors[name] && <span className="error-message">{errors[name].message}</span>}
        </div>
    );
};

export default InputField;

