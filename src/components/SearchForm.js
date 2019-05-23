import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    return (
        <form onSubmit={props.submit} className="container__search">
            <input type="text" value={props.value} onChange={props.change} className="search__input" />
            <button className="search__button">Search</button>
        </form>
    );
}

export default SearchForm;
