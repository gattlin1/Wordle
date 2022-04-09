import React, { useEffect } from 'react';
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element[] | JSX.Element;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const containerClasses = ['modal-container'];

  if (isOpen) {
    containerClasses.push('show-modal');
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={containerClasses.join(' ')} onClick={() => onClose()}>
      <div className='modal'>
        <i
          onClick={() => onClose()}
          className='close-btn fa-solid fa-square-xmark'
        ></i>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
