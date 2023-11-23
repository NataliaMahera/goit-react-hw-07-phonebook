import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Локальне сховище

import { contactsReducer } from './contacts-slice';
import { filterReducer } from './filter-slice';

// Вказуємо яку частину локального сховища синхронізуємо
const contactsConfig = {
  key: 'contacts',
  storage, // передається локальне сховище, яке імпортували
  whitelist: ['contacts'], // синхронізується тільки те поле, яке вказуємо
  // blacklist: ['isLoading', 'error'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer), // Редюсер для управління станом контактів
    filter: filterReducer, // .. фільтру
  },
  // Реагує на події (завантаження, оновлення стору) і або тягне дані з localStorage або навпаки
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // Сховище насичене даними з локального стору
