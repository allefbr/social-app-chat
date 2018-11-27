import createReducer from "../create-reducer";
import { contacts } from "../../utils/data";

import { FILTER_CONTACT } from "./actions";

const initialState = {
  items: contacts
};

const Contacts = createReducer(initialState, {
  [FILTER_CONTACT]: (state, action) => ({
    ...state,
    items: state.items.filter(item => item.id == action.payload.id)
  })
});

export default Contacts;
