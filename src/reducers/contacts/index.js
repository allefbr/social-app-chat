import createReducer from "../create-reducer";
import { contacts } from "../../mock";

import { FILTER_CONTACT } from "./actions";

const initialState = {
  items: contacts,
  singleItem: null
};

const Contacts = createReducer(initialState, {
  [FILTER_CONTACT]: (state, action) => ({
    ...state,
    singleItem: state.items.filter(
      item => item.id === Number(action.payload.id)
    )
  })
});

export default Contacts;
