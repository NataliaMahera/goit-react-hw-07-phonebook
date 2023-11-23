import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = { contacts: [] };

export const contactsSlice = createSlice({
  name: 'contacts', // Ім'я слайсу
  initialState, // Початковий стан редюсера слайсу
  reducers: {
    // Об'єкт з набором методів)
    addContact: {
      // Об'єкт з 2 властивостями (reducer, prepare)
      reducer(state, { payload }) {
        // console.log('state', state);
        // console.log('action', payload);

        //Додавання нового контакту до списку контактів
        // state.contacts.push(action.payload);
        state.contacts = [...state.contacts, payload];
      },
      prepare(newContact) {
        // Підготовка даних для додавання контакту з унікальним id
        return { payload: { id: nanoid(), ...newContact } };
      },
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

// Генеруэмо екшени
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу (підключаємо в store)
export const contactsReducer = contactsSlice.reducer;
