// ContactList.jsx
import React from 'react';
import Contact from './Contact'; 
import css from './Contact.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.form}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDeleteContact(contact.id)} 
        />
      ))}
    </ul>
  );
};

export default ContactList;
