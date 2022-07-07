import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from './Loading';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: '',
      album: '',
    };
  }

  componentDidMount() {
    this.fetchAlbum();
  }

  fetchAlbum = async () => {
    const { match: { params: { id } } } = this.props;

    const fetch = await getMusics(id);
    this.setState({
      artist: fetch[0].artistName,
      album: fetch[0].collectionName,
    });

    console.log(fetch);
  };

  render() {
    const { artist, album } = this.state;

    return (
      <>
        <Header />
        <div data-testid="page-album" id="content-collection">
          <h3 data-testid="artist-name" id="content-artist">
            { artist }
          </h3>
          <h2 data-testid="album-name" id="content-album">
            { album }
          </h2>
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

Album.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};

export default Album;
