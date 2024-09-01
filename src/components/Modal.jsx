function Modal({ title, content, onClose }) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>{title}</h2>
          <p>{content}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  