import React from 'react';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      btnDisabled: true,
      search: '',
      searchInfo: '',
      albums: [],
      empty: '',
      loading: false,
    };
  }

  searchState = (origin) => {
    const minLength = 2;
    this.setState({ search: origin.target.value });

    if (origin.target.value.length >= minLength) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  };

  buttonEvent = async (origin) => {
    origin.preventDefault();
    this.setState({ loading: true });
    const { search } = this.state;
    const apiFetch = await searchAlbumsAPI(search);

    if (apiFetch.length >= 1) {
      this.setState({
        albums: [...apiFetch],
        empty: false,
      });
    } else {
      this.setState({
        albums: [],
        empty: true,
      });
    }

    console.log(apiFetch);

    this.setState({ btnDisabled: true, searchInfo: search, search: '', loading: false });
  }

  albumElement = (album) => {
    <p key={ album }>
      {' '}
      {album}
      {' '}
    </p>;
  }

  albumItem = (album) => (
    <AlbumCard
      artist={ album.artistName }
      name={ album.collectionName }
      url={ album.artworkUrl100 }
      collectionId={ album.collectionId }
      key={ album.collectionName }
    />
  );

  render() {
    const { btnDisabled, search, albums, empty, searchInfo, loading } = this.state;

    const albumsArray = (
      <>
        <h3 id="search-message">
          Resultado de álbuns de:
          {' '}
          {searchInfo}
        </h3>
        {albums.map((album) => this.albumItem(album))}
      </>
    );

    const albumsNotFound = (
      <h3 id="search-not-found"> Nenhum álbum foi encontrado</h3>
    );

    return (
      <>
        <Header />
        <div data-testid="page-search" id="content-search">
          {loading
            ? <Loading />
            : (
              <>
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
                <div id="search-result">
                  { albums.length >= 1 && albumsArray }
                  { empty && albumsNotFound }
                </div>
              </>
            )}
        </div>
      </>
    );
  }
}

export default Search;
