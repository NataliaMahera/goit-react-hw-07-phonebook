import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactsForm/ContactsForm';
import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

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
        {contacts.length > 0 && <ContactList />}
      </Section>
    </Container>
  );
};

export default App;
