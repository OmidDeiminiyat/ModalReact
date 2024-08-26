import style from './Modal.module.scss';
const Modal = ({ show, onClose, children }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className={style.modalOverlay}>
        <div className={style.modal}>
          <button className={style.modalClose} onClick={onClose}>
            &times;
          </button>
          <div className={style.modalContent}>{children}</div>
        </div>
      </div>
    );
  };
  
  export default Modal;