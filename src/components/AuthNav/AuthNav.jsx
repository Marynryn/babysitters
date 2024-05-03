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
            <li key='login' className='mr-4'>

                <button className="border  border-stone-200 rounded-full " type='button' onClick={() => toggleModal('login')}>
                    <span className='bg-transparent flex px-6 py-2 text-base lg:px-10'>Log In</span>
                </button>
            </li >
            <li key='register'>

                <Button type={"button"} onClick={() => toggleModal('register')}>
                    <span className=' flex px-6 py-2 text-base lg:px-10'>Registration</span>
                </Button>

            </li>
        </ul >
            <Modal isOpen={modalOpen} onClose={setModalOpen} >
                <RegistrationForm type={type} onClose={setModalOpen} />
            </Modal>
        </div>
    )
}
