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
        <div><ul className='flex justify-between'>
            <li key='login'>

                <Button type={'button'} onClick={() => toggleModal('login')}>
                    <span className=' flex px-6 py-2 text-base'>Log In</span>
                </Button>
            </li >
            <li key='register'>

                <Button type={"button"} onClick={() => toggleModal('register')}>
                    <span className=' flex px-6 py-2 text-base'>Registration</span>
                </Button>

            </li>
        </ul >
            <Modal isOpen={modalOpen} onClose={setModalOpen} >
                <RegistrationForm type={type} onClose={setModalOpen} />
            </Modal>
        </div>
    )
}
