import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlicer';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';

export const ContactForm = ({ contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }

    const finalContact = { ...formData, id: nanoid() };

    const action = addContact(finalContact);
    dispatch(action);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const formData = {
      name,
      number,
    };
    handleAddContact(formData);
    setName('');
    setNumber('');
  };

  return (
    <div className={css.phonebookContainer}>
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label
        className={css.label} >Name
        <input
          className={css.input}
          type="text"
          name="name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className={css.label}> Number <input
          className={css.input}
          type="tel"
          name="number"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button className={css.btn} type="submit">Add contact</button>
      </form>
      </div>
  );
};