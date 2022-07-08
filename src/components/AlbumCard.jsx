import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const { name, artist, url, collectionId } = this.props;
    return (
      <div className="album-cards" key={ collectionId }>
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
            Acessar Álbum
          </p>
        </Link>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  url: PropTypes.string,
  collectionId: PropTypes.number,
};

AlbumCard.defaultProps = {
  name: '',
  artist: '',
  url: '',
  collectionId: '',
};

export default AlbumCard;
