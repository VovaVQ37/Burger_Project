import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverlay';
import './Modal.css';
import closeIcon from '../images/icon.png';




function Modal ({onClose, children}) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () =>document.removeEventListener('keydown', handleEsc);
    }, [onClose]);
    
    return ReactDOM.createPortal(
        <>
          <ModalOverlay onClick={onClose} />
         
                
          <div className='modal'>
            <button className="modal__close" onClick={onClose}>
            <img src={closeIcon} alt="Закрыть" /></button>
            {children}
         
       
      
          </div>
        </>,
        document.getElementById("modal-root")
    );
    }

    export default Modal;
