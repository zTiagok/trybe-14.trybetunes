import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      btnDisabled: true,
      search: '',
    };
  }

  searchState = (origin) => {
    const minLength = 2;
    this.setState({ search: origin.target.value });

    if (origin.target.value.length >= 2) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  };

  buttonEvent = (origin) => {
    origin.preventDefault();
    this.setState({ btnDisabled: true, search: '' });
  }

  render() {
    const { btnDisabled, search } = this.state;

    return (
      <>
        <Header />
        <div data-testid="page-search" id="content-search">
          <form id="search-form">
            <input
              type="text"
              id="search-input"
              placeholder="Artist Name"
              data-testid="search-artist-input"
              minLength="2"
              onChange={ this.searchState }
              value={ search }
            />
            <button
              type="submit"
              form="search-form"
              data-testid="search-artist-button"
              disabled={ btnDisabled }
              onClick={ this.buttonEvent }
            >
              Search
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
