import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  const sotredContacts = [...filteredContacts].sort((a, b) => b.name - a.name);

  return (
    <>
      <ul className={css.contactList}>
        {sotredContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
