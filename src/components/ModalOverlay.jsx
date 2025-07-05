import React from "react";
import './ModalOverlay.css';

function ModalOverlay({onClick}) {
    return <div className="modal-overlay" onClick={onClick}></div>;

}

export default ModalOverlay;