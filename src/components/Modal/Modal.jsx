import React, { useEffect } from 'react';

import css from './Modal.module.css';



import ReactDOM from 'react-dom';
import Button from 'components/Button/Button';

const Modal = ({ isOpen, onClose, children }) => {


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
                <button type='button' onClick={handleCloseModal}>
                    <svg className="" >
                        <use href="/public/svg/symbol-defs.svg#icon-x" width={32} height={32} />
                    </svg>
                </button>
                {children}
            </div>
        </div>, document.getElementById('modal-root')
    ) : null
};

export default Modal;
