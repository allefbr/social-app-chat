import { combineReducers } from "redux";

import contacts from "./contacts";
import messages from "./messages";

const rootReducer = combineReducers({
  contacts,
  messages
});

export default rootReducer;
