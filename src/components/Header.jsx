import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    getUser().then((value) => this.setState({ username: value.name }));
  }

  render() {
    const { username } = this.state;
    const header = (
      <>
        <p data-testid="header-user-name" id="user-welcome">
          Welcome
          {' '}
          { username }
          !
        </p>
        <Link to="/search" data-testid="link-to-search">Search</Link>
        {' '}
        <Link to="/album/:id">Album</Link>
        {' '}
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        {' '}
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        {' '}
        <Link to="/profile/edit">Profile Editor</Link>
      </>
    );

    return (
      <header data-testid="header-component" id="links">
        {username.length > 0
          ? header
          : <Loading />}
      </header>
    );
  }
}

export default Header;
