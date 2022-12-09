import { Component } from 'react';
import propTypes from 'prop-types';
import { Input, SearchForm, AllButton } from './App.styled';

export class SearchBar extends Component {
  state = {
    search: '',
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.search.trim() === '') {
      alert('Please, write what pictures you want to see');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.reset();
    window.scrollTo(0,1);

  };

  onInputChange = event => {
    this.setState({ search: event.target.value });
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    return (
      <header className="searchbar">
        <SearchForm onSubmit={this.onFormSubmit}>
          <AllButton type="submit" className="button">
            <span className="button-label">Search</span>
          </AllButton>

          <Input
            className="input"
            value={this.state.search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </SearchForm>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: propTypes.func,
  onChange: propTypes.func,
};
