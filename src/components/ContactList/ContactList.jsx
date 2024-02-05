import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlicer';
import css from './ContactList.module.css';
const ContactList = ({ contacts, filter }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <div className={css.listContainer}>
        <ul>
          {filteredContacts.map(contact => (
            <li className={css.contact_item} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                className={css.delete_btn}
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };


export { ContactList };