import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React, { useState } from 'react'

export const AuthNav = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState('');


    const toggleModal = (type) => {
        setType(type);
        setModalOpen(!modalOpen);
    };

    return (
        <div><ul className='flex'>
            <li key='login'>

                <Button type={'button'} onClick={() => toggleModal('login')}>
                    Log In
                </Button>
            </li >
            <li key='register'>

                <Button type={"button"} onClick={() => toggleModal('register')}>
                    Registration
                </Button>

            </li>
        </ul >
            <Modal isOpen={modalOpen} onClose={setModalOpen} >
                <RegistrationForm type={type} onClose={setModalOpen} />
            </Modal>
        </div>
    )
}
