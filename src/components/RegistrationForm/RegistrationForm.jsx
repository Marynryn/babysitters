import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Button from 'components/Button/Button';
import InputField from 'components/InputField/InputField';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'firebase.js';
import { yupResolver } from '@hookform/resolvers/yup'; // Импорт резольвера для yup схемы
import { authSchema } from 'schema/schema';

const RegistrationForm = ({ type, onClose }) => {
    const methods = useForm({
        resolver: yupResolver(authSchema)
    });
    const { handleSubmit, formState: { errors } } = methods;

    const onSubmit = async (data) => {
        const { email, password, name } = data;
        console.log(data);
        try {
            if (type === 'login') {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log(userCredential)
                if (name) {
                    await updateProfile(userCredential.user, {
                        displayName: name
                    });
                }
            }
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="block gap-10">
                <p className="mb-0.5 text-3xl">{`${type === 'register' ? 'Registration' : 'Log In'}`}</p>
                <p className="mb-0.5 text-xl">{`${type === 'register' ? 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.' : 'Welcome back! Please enter your credentials to access your account and continue your babysitter search.'}`}</p>
                <div className="flex gap-6">
                    {type === 'register' && (
                        <>
                            <InputField name="name" placeholder="Name" />
                            {errors.name && <span className="error-message">{errors.name.message}</span>}
                        </>
                    )}
                    <InputField name="email" placeholder="Email" />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                    <InputField name="password" placeholder="Password" />
                    {errors.password && <span className="error-message">{errors.password.message}</span>}
                </div>
                <Button type="submit">{`${type === 'login' ? 'Log In' : 'Sign Up'}`}</Button>
            </form>
        </FormProvider>
    );
};

export default RegistrationForm;
