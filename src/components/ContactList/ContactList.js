import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { phoneBookSelectors, phoneBookOperations } from 'redux/phoneBook';
import styles from './ContactList.module.css';
import { authSelectors } from 'redux/auth';

function ContactList() {
  // const token = useSelector(authSelectors.getToken);
  // const dispatch = useDispatch();

  // dispatch(phoneBookOperations.getContacts({token}));

  const filteredContacts = useSelector(phoneBookSelectors.getFilteredContacts);

  return (
    <>
      <ul className={styles.contacts}>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}

export default ContactList;
