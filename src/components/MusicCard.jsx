import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    const { favorites, trackId } = props;
    this.state = {
      isChecked: favorites.some((favorite) => favorite.trackId === trackId),
      loading: false,
    };
  }

  componentDidMount() {
    const { favorites } = this.props;
    console.log(favorites);
  }

  handleFavorite = ({ target }) => {
    const { checked } = target;
    const { songObj, isFavorite, handleRemoveFavorite } = this.props;
    this.setState({ isChecked: checked, loading: true }, () => {
      if (checked) {
        addSong(songObj)
          .then(() => this.setState({ loading: false }));
      } else {
        if (isFavorite === false) {
          handleRemoveFavorite();
          removeSong(songObj);
        }
        removeSong(songObj)
          .then(() => this.setState({ loading: false }));
      }
    });
  }

  render() {
    const { isChecked, loading } = this.state;
    const { trackName,
      previewUrl,
      trackId,
      index } = this.props;
    return (
      <div>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <div>
          <label htmlFor={ index }>
            Favorita
            <input
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              id={ index }
              onChange={ this.handleFavorite }
              checked={ isChecked }
              name={ trackName }
            />
          </label>
        </div>
        {loading && <Loading />}
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.number,
  index: PropTypes.number,
  songObj: PropTypes.shape({}),
  favorites: PropTypes.objectOf(PropTypes.string),
  isFavorite: PropTypes.bool,
  handleRemoveFavorite: PropTypes.func,
};

MusicCard.defaultProps = {
  trackName: '',
  previewUrl: '',
  trackId: 0,
  index: 0,
  songObj: {},
  favorites: [],
  isFavorite: false,
  handleRemoveFavorite: () => { },
};

export default MusicCard;
