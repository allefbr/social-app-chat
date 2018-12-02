import createReducer from "../create-reducer";
import { contacts } from "../../mock";

const initialState = {
  items: contacts
};

const Contacts = createReducer(initialState, {});

export default Contacts;
