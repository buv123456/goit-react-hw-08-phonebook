import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  editContact,
} from './operations';

const ifRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      // fetch all contacts from db
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        ifRejected(state, payload);
        state.isLoading = false;
      })
      // when we add new contact to db
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, payload];
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        ifRejected(state, payload);
        state.isLoading = false;
      })
      // when delete contact from db
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      // when edit contact from db
      .addCase(editContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.map(i => (i.id !== payload.id ? i : payload));
      })
      .addCase(editContact.rejected, (state, { payload }) => {
        ifRejected(state, payload);
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
