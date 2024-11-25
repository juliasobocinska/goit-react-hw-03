import React from "react";
import css from './Contact.module.css'

const SearchBox = ({ value, onFilterChange }) => {

    const handleChange = (evt) => {
        onFilterChange(evt.target.value)
    };

    return (
        <div className={css.filter}>
        <p>Find contacts by name</p>
        <input 
            type="text" 
            value={value}
            onChange={handleChange}
        />
        </div>
    );
}

export default SearchBox;