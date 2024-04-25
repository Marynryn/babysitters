const initialState = {
  isOpen: false,
  modalProps: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isOpen: true, modalProps: action.payload };
    case 'CLOSE_MODAL':
      return { ...state, isOpen: false, modalProps: null };
    default:
      return state;
  }
};

export default modalReducer;

export const openModal = modalProps => ({
  type: 'OPEN_MODAL',
  payload: modalProps,
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});
