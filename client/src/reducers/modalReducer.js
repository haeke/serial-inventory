import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

// default to the modal being closed.
const initialState = {
  openModal: false
};
// We just want to handle opening and closing the Modal component.
export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        openModal: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false
      };
    default:
      return state;
  }
};
