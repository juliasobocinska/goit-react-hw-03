import React from "react";

const SearchBox = ({ value, onFilterChange }) => {

    const handleChange = (evt) => {
        onFilterChange(evt.target.value)
    };

    return (
        <div>
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