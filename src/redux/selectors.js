export const getContacts = state => state.contacts.contacts; // Повертаємо контакти зі state
export const getFilter = state => state.filter; // Повертаємо поточний фільтр зі state

// export const getVisibleContacts = state => {
//   const contacts = getContacts(state); // Отримали контакти
//   const filter = getFilter(state); // Отримали поточний фільтр
//   const normalizedFilter = filter.toLowerCase(); // Нормалізували фільтр

//   // Філтруємо контакти для повернення імені з нормалізованого фільтру в рядку нижнього регістру
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
