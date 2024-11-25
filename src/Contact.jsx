import React from "react";
import css from './Contact.module.css'

const Contact = ({ name, number, onDelete }) => {

    console.log(css);

    return (
        <div className={css.contactList}>
        <li className={css.contactItem}>
            <span className={css.nameNumber}>{name} {number}</span>
            <button className={css.btn} onClick={onDelete}>Delete</button>
        </li>
        </div>
    )
}

export default Contact;