import createReducer from "../create-reducer";
import { messages } from "../../mock";

const initialState = {
  items: messages
};

const Messages = createReducer(initialState, {});

export default Messages;
