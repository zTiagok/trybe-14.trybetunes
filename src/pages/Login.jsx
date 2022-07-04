import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      loading: false,
      fetchComplete: false,
    };
  }

  stateUsername = (origin) => {
    this.setState({ username: origin.target.value });
  };

  buttonEvent = (origin) => {
    const { username } = this.state;
    const result = createUser({ name: username });
    origin.preventDefault();
    this.setState({ loading: true });
    result.then(() => { this.setState({ loading: false, fetchComplete: true }); });
  }

  render() {
    const { username, loading, fetchComplete } = this.state;

    let button = true;
    const minLength = 3;

    if (username.length >= minLength) {
      button = false;
    } else {
      button = true;
    }

    const input = (
      <>
        <form id="login-form">
          Usuário:
          <input
            type="text"
            name="user-login"
            id="user-login"
            data-testid="login-name-input"
            minLength="3"
            onChange={ this.stateUsername }
            required
          />
        </form>
        { fetchComplete && <Redirect to="/search" />}
        <button
          type="submit"
          form="login-form"
          data-testid="login-submit-button"
          disabled={ button }
          onClick={ this.buttonEvent }
        >
          Entrar
        </button>
      </>);

    return (
      <div className="content-login" data-testid="page-login">
        {(loading ? <Loading /> : input)}
      </div>
    );
  }
}

export default Login;
