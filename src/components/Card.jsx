import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { album:
      { artworkUrl100, collectionName, artistName, collectionId } } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div className="card" key={ collectionId }>
          <img src={ artworkUrl100 } alt="" />
          <h4>{collectionName}</h4>
          <p>{artistName}</p>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  album: PropTypes.shape({
    artworkUrl100: PropTypes.string,
    collectionName: PropTypes.string,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
  }),
};

Card.defaultProps = {
  album: {
    artworkUrl100: '',
    collectionName: '',
    artistName: '',
    collectionId: 0,
  },
};

export default Card;
