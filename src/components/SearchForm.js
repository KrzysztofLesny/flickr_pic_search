import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    state = {
        searchValue: '',
    }

    seachValueChange = e => {
        this.setState({
            searchValue: e.target.value,
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const searchValue = this.state.searchValue.trim();
        console.log(searchValue);
        if (searchValue) {
            const addCollection = this.props.addCollection(searchValue);
            if (addCollection) {
                this.setState({
                    searchValue: '',
                })
            }
        } else {
            this.setState({
                searchValue: '',
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="container__search">
                <input type="text" value={this.state.searchValue} onChange={this.seachValueChange} className="search__input" placeholder="Search..." />
                <button className="search__button">Search</button>
            </form>
        );
    }
}

export default SearchForm;
