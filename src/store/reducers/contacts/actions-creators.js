import { FILTER_CONTACT } from "./actions";

export const filterContact = id => ({
  type: FILTER_CONTACT,
  payload: { id }
});
