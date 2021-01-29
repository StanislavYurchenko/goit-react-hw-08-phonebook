import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { phoneBookSelectors } from 'redux/phoneBook';
import styles from './ContactList.module.css';

function ContactList() {
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
