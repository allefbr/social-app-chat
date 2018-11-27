import createReducer from "../create-reducer";
import { contacts } from "../../utils/data";

import { FILTER_CONTACT } from "./actions";

const initialState = {
  items: contacts,
  filterItem: null
};

const Contacts = createReducer(initialState, {
  [FILTER_CONTACT]: (state, action) => ({
    ...state,
    filterItem: state.items.filter(item => item.id == action.payload.id)
  })
});

export default Contacts;
