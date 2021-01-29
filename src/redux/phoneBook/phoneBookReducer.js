import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import * as actions from './phoneBookActions';
import {
  addContact,
  removeContact,
  fetchContacts,
} from './phoneBookOperations';

const contactsReducer = createReducer([], {
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [actions.onChangeFilter]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [removeContact.rejected]: (_, { payload }) => payload,
  [removeContact.pending]: () => null,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
