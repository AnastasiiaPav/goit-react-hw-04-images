import { useState } from 'react';
import propTypes from 'prop-types';
import { Input, SearchForm, AllButton } from './App.styled';

export const SearchBar= ({onSubmit}) => {
  const [search, setSearch] = useState('')


 const onFormSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      alert('Please, write what pictures you want to see');
      return;
    }
  onSubmit(search);
   reset();
    window.scrollTo(0,1);

  };

const  onInputChange = event => {
    setSearch( event.target.value.toLowerCase());
  };

 const reset = () => {
    setSearch('');
  }

 
    return (
      <header className="searchbar">
        <SearchForm onSubmit={onFormSubmit}>
          <AllButton type="submit" className="button">
            <span className="button-label">Search</span>
          </AllButton>

          <Input
            className="input"
            value={search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onInputChange}
          />
        </SearchForm>
      </header>
    );
  }

SearchBar.propTypes = {
  onSubmit: propTypes.func,
  onChange: propTypes.func,
};
