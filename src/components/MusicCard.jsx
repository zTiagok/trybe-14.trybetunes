import React from 'react';
import propTypes from 'prop-types';

class MusicCard extends React.Component {
  songMap = (song) => (
    <>
      <h4 className="track-name" key={ song.previewUrl }>
        {' '}
        {song.trackName}
        {' '}
      </h4>
      <audio data-testid="audio-component" src={ song.previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
      </audio>
    </>
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
  songs: propTypes.string,
};

MusicCard.defaultProps = {
  songs: [],
};

export default MusicCard;
