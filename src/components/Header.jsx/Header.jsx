import AppBar from 'components/AppBar/AppBar'
import Button from 'components/Button/Button'
import React, { useEffect, useState } from 'react'
import Modal from 'components/Modal/Modal';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { IsLoggedIn } from '../../helpers/isLoggedIn';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase.js';


export const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState('');

    const [isLog, setIsLog] = useState(IsLoggedIn());

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsLog(!!user);
        });

        return unsubscribe;
    }, []);

    const toggleModal = (type) => {
        setType(type);
        setModalOpen(!modalOpen);
    };
    const handleLogout = async () => {



        await signOut(auth)
            .then(() => {

                console.log('Выход из системы выполнен успешно');
            })
            .catch((error) => {

                console.error('Ошибка при выходе из системы:', error);
            });
        IsLoggedIn();
    }
    return (
        <div className='flex'>
            <p>Nanny.Services</p>
            <AppBar />
            {isLog ? (<Button type={'button'} onClick={handleLogout}>Log Out</Button>) : (<ul className='flex'>
                <li key='login'>

                    <Button type={'button'} onClick={() => toggleModal('login')}>
                        Log In
                    </Button>
                </li>
                <li key='register'>

                    <Button type="button" onClick={() => toggleModal('register')}>
                        Registration
                    </Button>

                </li>
            </ul>)}

            <Modal isOpen={modalOpen} onClose={setModalOpen} >
                <RegistrationForm type={type} onClose={setModalOpen} />
            </Modal>
        </div>
    )
}
export default Header;