import React from 'react';
import propTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  addToFavorites = ({ target: { checked } }) => {
    const { songs } = this.props;

    if (checked) {
      addSong(songs);
    }
  }

  songMap = (song) => (
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
          onClick={ this.addToFavorites }
        />
      </label>
    </div>
  )

  render() {
    const { songs } = this.props;
    return (
      <div className="tracks">
        {songs.map((song) => this.songMap(song))}
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
