import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter', // Ім'я слайсу
  initialState, // Початковий стан редюсера слайсу
  reducers: {
    changeFilter(_, { payload }) {
      // Оновлення значення фільтру на основі переданого (value)
      return payload;
    },
  },
});

// Генеруэмо екшени
export const { changeFilter } = filterSlice.actions;
// Редюсер слайсу (підключаємо в store)
export const filterReducer = filterSlice.reducer;
