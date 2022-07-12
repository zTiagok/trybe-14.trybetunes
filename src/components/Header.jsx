import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    getUser().then((request) => this.setState({ user: request.name }));
  }

  render() {
    const { user } = this.state;
    return (
      <header data-testid="header-component">
        <div>
          {
            (
              user.length
                ? (
                  <div>
                    <p>Welcome, </p>
                    <p data-testid="header-user-name">{user}</p>
                  </div>
                )
                : <Loading />
            )
          }
        </div>
        <div>
          <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </div>

      </header>
    );
  }
}

export default Header;
