import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts-slice';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <li key={id} className={css.contactListItem}>
        {name}: {number}
      </li>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;
