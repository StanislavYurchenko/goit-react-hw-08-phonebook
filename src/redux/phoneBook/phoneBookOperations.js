import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phoneBookApi from 'api/phoneBookApi';

export const addContact = createAsyncThunk(
  'phoneBook/addContact',
  async ({ contact }, { rejectWithValue }) => {
    try {
      const responseContact = await phoneBookApi.addContact(contact);
      return responseContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'phoneBook/deleteContact',
  async ({ id }, { rejectWithValue }) => {
    try {
      await phoneBookApi.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getContacts = createAsyncThunk(
  'phoneBook/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const books = await phoneBookApi.getContacts();
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const patchContact = createAsyncThunk(
//   'phoneBook/patchContacts',
//   async ({ id, contact }, { rejectWithValue }) => {
//     try {
//       const books = await phoneBookApi.patchContact(id, contact);
//       return books;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );
