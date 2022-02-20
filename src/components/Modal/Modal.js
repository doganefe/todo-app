import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/actions";
import "./Modal.css";
const Modal = () => {
  const state = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  function confirm() {
    dispatch(actions.modalConfirm());
  }
  function cancel() {
    dispatch(actions.modalCancel());
  }

  return (
    state.isOpen && (
      <div className="modal">
        <div className="modal__content">
          <p className="hidden">fake</p>
          <p>
            "{state.itemToDelete.title}" adlı elemanı silmek istediğinize emin
            misiniz?
          </p>
          <div className="modal__buttons">
            <button onClick={confirm} className="btn btn__danger">
              Evet
            </button>
            <button onClick={cancel} className="btn ">
              Hayır
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
