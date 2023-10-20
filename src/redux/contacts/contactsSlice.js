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

  extraReducers: {
    // fetch all contacts from db
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      ifRejected(state, payload);
    },
    // when we add new contact to db
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addContact.rejected](state, { payload }) {
      ifRejected(state, payload);
    },
    // when delete contact from db
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
    },
    // when edit contact from db
    [editContact.pending](state) {
      state.isLoading = true;
    },
    [editContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = state.items.map(i => (i.id !== payload.id ? i : payload));
    },
    [editContact.rejected](state, { payload }) {
      ifRejected(state, payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
