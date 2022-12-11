import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './App.styled';

import propTypes from 'prop-types';

const modalPort = document.getElementById('modal-root');

export const Modal = ({ isOpen, onClose, children }) => {
  const closeOnEscape = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  });

  return createPortal(
    <Backdrop onClick={onClose}>
      <div>{children}</div>
    </Backdrop>,
    modalPort
  );
};

Modal.propTypes = {
  onClose: propTypes.func,
  isOpen: propTypes.bool,
};
