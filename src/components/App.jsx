import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contact/Contact';
import { ContactsFilter } from './Filter/Filter';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/contacts-operations';

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <ContactsFilter />
        <Contacts />
      </Section>
    </>
  );
};
