import { useDispatch } from 'react-redux';
import { contactBox, info, text, buttonContactsDelete } from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ list: { name, number, id } }) {
    const dispatch = useDispatch();

    return (
        <li className={contactBox}>
            <div className={info}>
                <h3 className={text}>{name}</h3>
                <p className={text}>{number}</p>
                <button
                    className={buttonContactsDelete}
                    onClick={() => dispatch(deleteContact(id))}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
