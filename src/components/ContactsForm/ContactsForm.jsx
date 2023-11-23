import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts-slice';
import css from './ContactsForm.module.css';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // Обробка відправки форми
  const handleSubmit = event => {
    event.preventDefault();

    // Перевірка на дублікат імені, чи імя яке хочемо додати співпадає з тим яке вже є
    const isExist = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    // якщо хоч один елемент співпадє то в isExist буде true
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    // Виклик функції з передачею об'єкту контактів. Redux в slice в action отримає цей об'єкт
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  //Обробка зміни значення полів форми
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          className={css.input}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          className={css.input}
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>

      <button type="submit" className={css.addBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;
