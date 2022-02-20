import actionTypes from "./actionTypes";

const emptyState = {
  isOpen: false,
  itemToDelete: null,
};

export const setModal = (data) => {
  return {
    type: actionTypes.SET_MODAL,
    payload: data,
  };
};
export const modalConfirm = (data) => {
  return {
    type: actionTypes.MODAL_CONFIRM,
    payload: emptyState,
  };
};
export const modalCancel = () => {
  return {
    type: actionTypes.MODAL_CANCEL,
    payload: emptyState,
  };
};

const modalActions = {
  setModal,
  modalCancel,
  modalConfirm,
};

export default modalActions;
