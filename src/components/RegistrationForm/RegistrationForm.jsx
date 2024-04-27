import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import { auth } from "firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Formik, Form, ErrorMessage } from "formik";
import { authSchema } from "schema/schema";

const initialValues = {
    name: "",
    email: "",
    password: ""
};

const RegistrationForm = ({ type, onClose }) => {
    const handleSubmit = async (values, { resetForm }) => {
        const { email, password, name } = values;
        console.log(values);
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
            resetForm();
            onClose()

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={authSchema} onSubmit={handleSubmit}>
            <Form className="block gap-10">
                <p className="mb-0.5 text-3xl">
                    {`${type === 'register' ? 'Registration' : 'Log In'} `}
                </p>
                <p className="mb-0.5 text-xl">
                    {`${type === 'register' ? 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.' : 'Welcome back! Please enter your credentials to access your account and continue your babysitter search.'} `}
                </p>
                <div className="flex gap-6">
                    <ul>
                        {type === 'register' && (<li key="name"><InputField type="text" name="name" placeholder="Name" /> <ErrorMessage name="name" component="div" className="error-message" /></li>
                        )}
                        <li key="email">
                            <InputField type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" className="error-message" /></li>
                        <li key="password">
                            <InputField type="password" name="password" placeholder="Password" />
                            <ErrorMessage name="password" component="div" className="error-message" /></li>
                    </ul>
                </div>
                <Button type="submit" >
                    {`${type === 'login' ? 'Log In' : 'Sign Up'}`}
                </Button>
            </Form>
        </Formik>
    );
}

export default RegistrationForm;
