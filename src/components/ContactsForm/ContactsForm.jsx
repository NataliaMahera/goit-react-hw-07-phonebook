import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import css from './ContactsForm.module.css';
import { nanoid } from 'nanoid';
import { addContactsThunk } from 'redux/operations';

const ContactsForm = () => {
  const [data, setData] = useState({ name: '', phone: '' });

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === data.name.toLowerCase().trim() ||
        contact.phone === data.phone
    );

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(
      addContactsThunk({ name: data.name, phone: data.phone, id: nanoid() })
    );
    setData({ name: '', phone: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          className={css.input}
          value={data.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>

      <label className={css.label}>
        Phone
        <input
          type="tel"
          name="phone"
          className={css.input}
          value={data.phone}
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
