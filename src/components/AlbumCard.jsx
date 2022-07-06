import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const { name, artist, url, collectionId } = this.props;
    return (
      <div className="album-cards">
        <p className="album-name">
          { name }
        </p>
        <p className="album-artist">
          { artist }
        </p>
        <img src={ url } alt={ name } className="album-image" />
        <Link to={ `/album/${collectionId}` }>
          <p
            className="album-link"
            data-testid={ `link-to-album-${collectionId}` }
          >
            Ouvir
          </p>
        </Link>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  collectionId: PropTypes.string.isRequired,
};

export default AlbumCard;
