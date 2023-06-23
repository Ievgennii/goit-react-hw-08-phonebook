import { ContactForm } from '../components/ContactForm';
import css from '../components/Contacts.module.css';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';

const { useEffect } = require('react');
const { useDispatch, useSelector } = require('react-redux');
const { getContactsThunk } = require('redux/contactsThunk');

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.filter);
  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <div className={css.container}>
      <ContactForm />
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};

export default Contacts;