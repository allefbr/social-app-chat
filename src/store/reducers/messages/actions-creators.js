import { INIT_CONVERSATION, ADD_MESSAGE, SELECT_MESSAGE } from "./actions";

export const initConversation = (id, thumb) => ({
  type: INIT_CONVERSATION,
  payload: { id, thumb }
});

export const addMessage = (id, message) => ({
  type: ADD_MESSAGE,
  payload: { id, message }
});

export const selectMessage = id => ({
  type: SELECT_MESSAGE,
  payload: { id }
});
