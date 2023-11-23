import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { deleteContactsThunk } from 'redux/operations';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <li key={id} className={css.contactListItem}>
        {name}: {phone}
      </li>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;
