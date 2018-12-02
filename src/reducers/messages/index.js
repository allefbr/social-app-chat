import createReducer from "../create-reducer";
import { messages } from "../../mock";

import { INIT_CONVERSATION, ADD_MESSAGE, SELECT_MESSAGE } from "./actions";

const initialState = {
  items: messages
};

const Messages = createReducer(initialState, {
  [INIT_CONVERSATION]: (state, action) => ({
    ...state,
    items: [
      ...state.items,
      {
        id: action.payload.id,
        thumb: action.payload.thumb,
        messages: []
      }
    ]
  }),

  [ADD_MESSAGE]: (state, action) => {
    const { payload } = action;
    return {
      ...state,
      items: state.items.map(m => {
        if (m.id == payload.id) {
          m.messages = [
            ...m.messages,
            {
              id: m.messages.length + 1,
              type: "text",
              text: payload.message,
              date: Date.now(),
              me: true
            }
          ];

          return {
            ...m
          };
        }

        return m;
      })
    };
  }
});

// {
//   id: m.messages.length + 1,
//   type: "text",
//   text: payload.message,
//   date: Date.now(),
//   me: true
// }

export default Messages;
