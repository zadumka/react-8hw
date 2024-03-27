import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <LoginForm />
    </>
  );
}
