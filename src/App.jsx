import { ContactForm, ContactList, Filter } from 'components';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from './redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <div>
      <ContactForm contacts={contacts} />
      <Filter filter={filter} />
      <ContactList filter={filter} contacts={contacts} />
    </div>
  );
};