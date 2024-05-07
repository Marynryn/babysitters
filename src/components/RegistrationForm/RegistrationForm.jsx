import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import InputField from 'components/InputField/InputField';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'firebase.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from 'schema/schema';
// import sprite from "svg/symbol-defs.svg";
const RegistrationForm = ({ type, onClose }) => {
    const methods = useForm({
        resolver: yupResolver(authSchema)
    });
    const { handleSubmit, formState: { errors } } = methods;


    const onSubmit = methods.handleSubmit(async (data) => {
        console.log(data);
        const { email, password, name } = data;
        const errorMessages = [];

        // Проверяем наличие ошибок и добавляем их в массив errorMessages
        if (errors) {
            Object.values(errors).forEach(error => {
                if (error.message) {
                    errorMessages.push(error.message);
                }
            });
        }

        try {
            if (errorMessages.length > 0) {
                // Выводим сообщения об ошибках в тостере
                errorMessages.forEach(message => toast.error(message));
            } else {
                // Ваша логика обработки формы при отсутствии ошибок валидации
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
            }
        } catch (error) {
            toast.error(error.message);
        }
    });
    const errorMessages = Object.values(errors).map(error => error.message);
    errorMessages.length > 0 && errorMessages.map((message, index) => (

        toast.error(message)

    ))
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="block gap-10">
                <p className="mb-5 text-4xl font-medium">{`${type === 'register' ? 'Registration' : 'Log In'}`}</p>
                <p className="mb-10 text-s font-base" style={{ color: "rgba(17, 16, 28, 0.50)" }}>{`${type === 'register' ? 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.' : 'Welcome back! Please enter your credentials to access your account and continue your babysitter search.'}`}   </p>
                <div className="w-full relative">
                    {type === 'register' && (
                        <>
                            <InputField name="name" placeholder="Name" />

                        </>
                    )}
                    <InputField name="email" placeholder="Email" />

                    <InputField name="password" placeholder="Password" />

                    {/* <svg className="w-5 h-5 absolute top-3/4 right-1/4 mb-4" >
                        <use href={`${sprite}#icon-eye-off`} width={20} height={20} />
                    </svg> */}

                </div>
                <div>
                    <button className=' bg-teal-900  border  border-stone-200 rounded-full w-full py-3 text-center mt-8' type="submit" ><span className='text-white'>{`${type === 'login' ? 'Log In' : 'Sign Up'}`}</span></button>
                </div>
            </form>

        </FormProvider>
    );
};

export default RegistrationForm;
