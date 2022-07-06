import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

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
        <Link to="/search" data-testid="link-to-search" className="link">Search</Link>
        {' '}
        <Link to="/album/:id" className="link">Album</Link>
        {' '}
        <Link to="/favorites" className="link">Favorites</Link>
        {' '}
        <Link to="/profile" className="link">Profile</Link>
        {' '}
        <Link to="/profile/edit" className="link">Profile Editor</Link>
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
