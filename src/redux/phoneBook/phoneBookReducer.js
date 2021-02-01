import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './phoneBookActions';
import { addContact, deleteContact, getContacts } from './phoneBookOperations';

const contactsReducer = createReducer([], {
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [getContacts.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [actions.onChangeFilter]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
  [getContacts.rejected]: (_, { payload }) => payload,
  [getContacts.pending]: () => null,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
