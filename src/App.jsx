import Title from './components/Title/Title';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useSelector } from 'react-redux';

function App() {
    const contacts = useSelector(state => state.contacts.contacts);
    const hasContacts = contacts.length > 0;

    return (
        <>
            <Title />
            <ContactForm />
            <SearchBox />
            {hasContacts && <ContactList />}
            {!hasContacts && <p className='noContacts'>No contacts</p>}
        </>
    );
}

export default App;
