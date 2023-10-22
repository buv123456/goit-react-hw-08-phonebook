import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const res = await axios('/contacts');
      toast.success(`Here is your phonebook`);
      return res.data;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success(`${contact.name} was added to your phonebook`);
      return data;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      toast.success(`Contact was deleted from your phonebook`);
      return data.id;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ name, number, id }, thunkApi) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success(`Contact was saved to your phonebook`);
      return data;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
