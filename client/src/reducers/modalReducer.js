import { OPEN_MODAL, CLOSE_MODAL, EDIT_MODE } from "../actions/types";

// default to the modal being closed.
const initialState = {
  openModal: false,
  edit_mode: false
};
// We just want to handle opening and closing the Modal component.
export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        openModal: true,
        inventoryItem: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false
      };
    case EDIT_MODE:
      return {
        ...state,
        edit_mode: !state.edit_mode
      };
    default:
      return state;
  }
};
