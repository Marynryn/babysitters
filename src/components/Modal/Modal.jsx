import React, { useEffect } from 'react';

import css from './Modal.module.css';



import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {

    console.log({ onClose, children, isOpen })
    const handleCloseModal = () => {
        onClose(false);
    }

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                handleCloseModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCloseModal]);





    return isOpen ? ReactDOM.createPortal(
        <div className={css.modal_backdrop} onClick={handleBackdropClick}>
            <div className={css.modal_content}>
                {children}
            </div>
        </div>, document.getElementById('modal-root')
    ) : null
};

export default Modal;
