import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './operations';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
};

// Визначення функції getActions, яка повертає умову isAnyOf для зазначеного типу дії
const getActions = type =>
  isAnyOf(
    addContactsThunk[type],
    deleteContactsThunk[type],
    getContactsThunk[type]
  );

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.contactItems = payload; // Оновлення списку контактів у стані
  state.error = null;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.contactItems = [payload, ...state.contactItems]; // Dо існуючих контактів додаємо новий який приходить з запиту
  state.error = null;
};

const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.contactItems = state.contactItems.filter(({ id }) => id !== payload);
  console.log('Deleting contact with ID:', payload);
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = { contactItems: [], isLoading: false, error: null };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

// Редюсер слайсу (підключаємо в store)
export const contactsReducer = contactsSlice.reducer;
