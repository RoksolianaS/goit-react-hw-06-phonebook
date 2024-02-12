import axios from 'axios';

const instance = axios.create({
baseURL: 'https://65caa8ea3b05d29307e081bd.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const results = await instance.get('/contacts');
  return results.data;
};

export const addNewContact = async newContactData => {
  const results = await instance.post('/contacts', newContactData);
  return results.data;
};

export const deleteContacts = async contactId => {
  const results = await instance.delete(`/contacts/${contactId}`);
  return results.data;
};