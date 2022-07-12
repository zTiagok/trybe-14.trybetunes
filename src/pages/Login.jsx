import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      disabled: true,
      renderLoading: false,
      renderSearch: false,

    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    if (value.length > 2) {
      return this.setState({ name: value, disabled: false });
    }
    return this.setState({ name: '', disabled: true });
  }

  handleLoading = (e) => {
    const { name } = this.state;
    e.preventDefault();
    this.setState({ renderLoading: true });
    const promise = createUser({ name });
    promise.then(() => this.setState({ renderLoading: false, renderSearch: true }));
  }

  render() {
    const { disabled, renderLoading, renderSearch } = this.state;
    return (
      <div data-testid="page-login">
        {
          (renderLoading
            ? <Loading />
            : (
              <form>
                <input
                  data-testid="login-name-input"
                  type="text"
                  placeholder="Nome"
                  onChange={ this.handleChange }
                />
                <button
                  data-testid="login-submit-button"
                  type="submit"
                  onClick={ this.handleLoading }
                  disabled={ disabled }
                >
                  Entrar
                </button>
              </form>
            )
          )
        }
        {renderSearch && <Redirect to="/search" />}
      </div>
    );
  }
}

export default Login;
