import createReducer from "../create-reducer";
import { messages } from "../../mock";

import { INIT_CONVERSATION, ADD_MESSAGE, SELECT_MESSAGE } from "./actions";

const initialState = {
  items: messages,
  selectItem: null
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

  [ADD_MESSAGE]: (state, action) => ({
    ...state,

    items: state.items.map(item => {
      if (item.id == action.payload.id) {
        item.messages = [
          ...item.messages,
          {
            id: item.messages.length + 1,
            type: "text",
            text: action.payload.message,
            date: Date.now(),
            me: true
          }
        ];
      }

      return item;
    })
  }),

  [SELECT_MESSAGE]: (state, action) => ({
    ...state,
    selectItem: state.items.filter(
      item => item.id === Number(action.payload.id)
    )
  })
});

export default Messages;
