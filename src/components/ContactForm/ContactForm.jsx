import { addContact } from '../../redux/contactsSlicer';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  const handleAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }

    const finalContact = { ...formData };

    dispatch(addContact(finalContact));
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.name.value;
    const number = event.currentTarget.number.value;

    const formData = {
      name,
      number,
    };
    handleAddContact(formData);
    event.currentTarget.reset();
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
          required/>
      </label>
      <label className={css.label}> Number <input
          className={css.input}
          type="tel"
          name="number"
          required/>
      </label>
      <button className={css.btn} type="submit">Add contact</button>
      </form>
      </div>
  );
};