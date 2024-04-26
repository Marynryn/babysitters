import AppBar from 'components/AppBar/AppBar'
import Button from 'components/Button/Button'
import React, { useState } from 'react'
import Modal from 'components/Modal/Modal';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

export const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState('');


    const toggleModal = (type) => {
        setType(type);
        setModalOpen(!modalOpen);
    };
    console.log(modalOpen, type);
    return (
        <div className='flex'>
            <p>Nanny.Services</p>
            <AppBar />
            <ul className='flex'>
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
            </ul>
            <Modal isOpen={modalOpen} onClose={setModalOpen} >
                <RegistrationForm type={type} />
            </Modal>
        </div>
    )
}
export default Header;