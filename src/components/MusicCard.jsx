import React from 'react';
import propTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  state = {
    loading: false,
    favorites: [],
  }

  addToFavorites = async ({ target: { checked, id } }) => {
    const { songs } = this.props;
    const { favorites } = this.state;

    if (checked) {
      const favArray = [...favorites, id];
      this.setState({ favorites: favArray, loading: true });
      await addSong(songs);
      this.setState({ loading: false });
      console.log(favArray);
    }
  }

  songMap = (song) => {
    const { favorites } = this.state;
    return (
      <div key={ song.previewUrl } className="track-container">
        <h4 className="track-name">
          {song.trackName}
        </h4>
        <audio data-testid="audio-component" src={ song.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label
          data-testid={ `checkbox-music-${song.trackId}` }
          htmlFor={ `favorite-${song.trackId}` }
        >
          Favorita
          <input
            type="checkbox"
            id={ `favorite-${song.trackId}` }
            className="track-favorite"
            onClick={ this.addToFavorites }
            checked={ favorites.includes(`favorite-${song.trackId}`) }
          />
        </label>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const { songs } = this.props;

    return (
      <div className="tracks">
        {loading
          ? <Loading />
          : songs.map((song) => this.songMap(song))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  songs: propTypes.arrayOf,
};

MusicCard.defaultProps = {
  songs: [],
};

export default MusicCard;
