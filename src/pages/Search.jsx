import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Card from '../components/Card';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      artist: '',
      renderLoading: false,
      albums: [],
      albumsNotFound: false,
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    if (value.length > 1) {
      return this.setState({
        disabled: false,
        artist: value,
      });
    }
    return this.setState({ disabled: true });
  }

  handleClick = async () => {
    try {
      const { artist } = this.state;
      this.setState({ renderLoading: true });
      const obj = await searchAlbumsAPI(artist);
      if (obj.length === 0) {
        this.setState({
          albumsNotFound: true,
          albums: [],
          disabled: true,
          renderLoading: false,
        });
      } else {
        this.setState({
          renderLoading: false,
          disabled: true,
          albums: [...obj],
          albumsNotFound: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { disabled, artist, renderLoading, albumsNotFound, albums } = this.state;
    const albunsByArtist = (
      <div>
        <p>
          {`Resultado de álbuns de: 
          ${artist}`}
        </p>
        {albums.map((album) => <Card key={ album.collectionId } album={ album } />)}
      </div>);
    return (
      <div data-testid="page-search">
        <Header />
        {
          renderLoading
            ? <Loading />
            : (
              <form>
                <input
                  type="text"
                  name="artist"
                  data-testid="search-artist-input"
                  onChange={ this.handleChange }
                  placeholder="Nome do Artista"
                />
                <button
                  type="submit"
                  data-testid="search-artist-button"
                  disabled={ disabled }
                  onClick={ this.handleClick }
                >
                  Pesquisar
                </button>
              </form>
            )
        }
        {albums.length > 0 && albunsByArtist}
        {albumsNotFound && <p>Nenhum álbum foi encontrado</p>}
      </div>
    );
  }
}

export default Search;
