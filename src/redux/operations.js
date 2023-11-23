import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://655f2ac9879575426b44b80b.mockapi.io';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      // ЦЕ БУДЕ ЗАПИСАНО В ACTION.PAYLOAD РЕДЬЮСЕРУ
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', { name, phone });
      // ЦЕ БУДЕ ЗАПИСАНО В ACTION.PAYLOAD РЕДЬЮСЕРУ
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      // ЦЕ БУДЕ ЗАПИСАНО В ACTION.PAYLOAD РЕДЬЮСЕРУ
      return console.log('deleteContactsThunk', data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
