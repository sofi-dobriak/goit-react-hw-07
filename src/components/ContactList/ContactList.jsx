import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filters.name);

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <>
            {visibleContacts.length > 0 && (
                <ul className={s.contactsList}>
                    {visibleContacts.map(({ id, name, number }) => (
                        <Contact key={id} id={id} name={name} number={number} />
                    ))}
                </ul>
            )}
            {visibleContacts.length === 0 && (
                <p className='noContacts'>No contacts with such name</p>
            )}
        </>
    );
};

export default ContactList;
