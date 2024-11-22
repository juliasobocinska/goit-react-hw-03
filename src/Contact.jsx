import React from "react";
import './styles.css'

const Contact = ({ name, number }) => {
    return (
        <li className="label">
            <span className="name-number">{name} {number}</span>
            <button className="btn">Delete</button>
        </li>
    )
}

export default Contact;