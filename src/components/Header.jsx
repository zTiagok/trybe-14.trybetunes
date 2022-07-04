import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    getUser().then((request) => { this.setState({ username: request.name }); });
  }

  render() {
    const { username } = this.state;
    const headerItems = (
      <>
        <div className="user-welcome" data-testid="header-user-name">
          Welcome,
          {' '}
          {username}
          !
        </div>
        <nav className="navigation">
          <Link to="/search">Search</Link>
          <Link to="/album/:id">Albums</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/profile/edit">Edit Profile</Link>
        </nav>
      </>);

    return (
      <header data-testid="header-component">
        { username.length
          ? headerItems
          : <Loading />}
      </header>
    );
  }
}

export default Header;
