import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactsForm/ContactsForm';
import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/operations';
import { selectContacts, selectIsLoading } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <Notification message="Your phonebook is empty. Please add your contact!" />
        )}
        {isLoading && <Loader />}
        {contacts.length > 0 && <ContactList />}
      </Section>
    </Container>
  );
};

export default App;
