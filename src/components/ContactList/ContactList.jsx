import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          <li className={styles.item} key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
