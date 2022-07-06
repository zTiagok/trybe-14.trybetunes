import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      btnDisabled: true,
      isLoading: false,
      redirect: false,
    };
  }

  usernameState = (origin) => {
    const maxLength = 3;

    this.setState({ username: origin.target.value });

    if (origin.target.value.length >= maxLength) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  }

  buttonClickEvent = (origin) => {
    this.setState({ isLoading: true });
    const { username } = this.state;
    origin.preventDefault();

    const promise = createUser({ name: username });
    promise.then(() => { this.setState({ isLoading: false, redirect: true }); });

    this.setState({ username: '', btnDisabled: true });
  };

  render() {
    // VARIÁVEIS ----------------------------------------
    const { username, btnDisabled, isLoading, redirect } = this.state;

    const loginInput = (
      <div id="page-login">
        <form id="login-form">
          <input
            type="text"
            id="login-username"
            minLength="3"
            data-testid="login-name-input"
            onChange={ this.usernameState }
            value={ username }
          />
          <button
            type="submit"
            form="login-form"
            data-testid="login-submit-button"
            disabled={ btnDisabled }
            onClick={ this.buttonClickEvent }
          >
            Entrar
          </button>
        </form>
        {redirect && <Redirect to="/search" />}
      </div>
    );
    // -------------------------------------------------

    return (
      (isLoading
        ? <Loading />
        : loginInput)
    );
  }
}

export default Login;
