import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { phoneBookSelectors, phoneBookOperations } from 'redux/phoneBook';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(phoneBookSelectors.getContacts);
  const dispatch = useDispatch();

  const onChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        toast.error(`There are no type input "${name}"`);
    }
  };

  const isExistContact = name => {
    return contacts.some(contact => contact.name === name);
  };

  const onSubmit = event => {
    event.preventDefault();

    const normalizedName = name.trim();
    if (isExistContact(name)) {
      return toast.error(`"${normalizedName}" contact already exists`);
    }
    if (!normalizedName) {
      return toast.error('Enter contact name');
    }
    const contact = { name: normalizedName, number };
    dispatch(phoneBookOperations.addContact({ contact }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Name</h3>
      <input
        className={styles.input}
        name="name"
        value={name}
        onChange={onChange}
        type="text"
      />

      <h3>Number</h3>
      <input
        className={styles.input}
        name="number"
        value={number}
        onChange={onChange}
        type="number"
      />

      <button className={styles['remove-btn']} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
