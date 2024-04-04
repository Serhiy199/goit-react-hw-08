import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { list } from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
    const filterContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={list}>
            {filterContacts.map(list => (
                <Contact list={list} key={list.id} />
            ))}
        </ul>
    );
}
