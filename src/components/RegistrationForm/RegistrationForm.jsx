import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import { auth } from "firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Formik, Form } from "formik";


import { authSchema } from "schema/schema";

const initialValues = {
    name: "",
    email: "",
    password: ""
};

const RegistrationForm = ({ type }) => {

    const handleSubmit = (values, { resetForm }) => {
        const { email, password, name } = values;

        try {
            if (type === 'login') {

                signInWithEmailAndPassword(auth, email, password);
            } else {

                createUserWithEmailAndPassword(auth, email, password);
            }

            resetForm();
        } catch (error) {

            console.log(error);
        }
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
            <Form className="block gap-10">
                <p className="mb-0.5 text-3xl">
                    {`${type === 'register' ? 'Registration' : 'Log In'} `}
                </p>
                <p className="mb-0.5 text-xl">
                    {`${type === 'register' ? 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.' : 'Welcome back! Please enter your credentials to access your account and continue your babysitter search.'} `}
                </p>
                <div className="flex gap-6">
                    {type === 'register' && (
                        <InputField type="text" name="name" placeholder="Name" />)}
                    <InputField type="email" name="email" placeholder="Email" />
                    <InputField type="password" name="password" placeholder="Password" />
                </div>
                <Button type={'submit'} onClick={handleSubmit}>
                    {`${type === 'login' ? 'Log In' : 'Sign Up'}`} </Button>
            </Form>
        </Formik>
    )
}

export default RegistrationForm;
