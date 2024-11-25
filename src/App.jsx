import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from 'react';
import ContactList from './ContactList.jsx'
import SearchBox from './SearchBox.jsx'
import ContactForm from './ContactForm.jsx'
import css from './Contact.module.css'




function App() {

  const [contacts, setContacts] = useState(() => {

    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [filter, setFilter] = useState("");

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => {
     const updatedContacts = [...prevContacts, newContact];

      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
  });
};

const handleDeleteContact = (contactId) => {
  setContacts((prevContacts) => {
    const updatedContacts = prevContacts.filter(contact => 
      contact.id !== contactId);
      
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };
  
  
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    useEffect(() => {

      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    return (
      <>
        <div className={css.appContainer}>
      <h1 className={css.phonebook}>Phonebook</h1>

      <ContactList
        contacts={filteredContacts} 
        onDeleteContact={handleDeleteContact}
      />

      <SearchBox 
        value={filter} 
        onFilterChange={setFilter}
      />

      <ContactForm 
        onAddContact={handleAddContact}
      />

        </div>

      </>
    );
}

export default App
