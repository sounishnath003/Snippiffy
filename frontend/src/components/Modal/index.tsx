import React from "react";
import './styles.css';

function Modal() {
  return (
    <div
      className="absolute top-0 z-50 flex justify-center items-center "
      style={{ background: `rgba(0,0,0,0.2)` }}
    >
      <div className="modal__card">
        <div className="text-xl">My modal</div>
      </div>
    </div>
  );
}

export default Modal;
