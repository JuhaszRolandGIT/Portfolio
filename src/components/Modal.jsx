import React from 'react';
import './Modal.css'; // Győződj meg róla, hogy ez tartalmazza a modal stílusait

export default function Modal({ content, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
