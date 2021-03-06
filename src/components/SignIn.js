import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { PasswordForgetLink } from './PasswordForget';
import './componentsCss/signIn.css';


const SignInPage = ({ history }) =>
  <div className='signIn'>
    <div className='signIn-cont'>
      <h1 className='welcomePageTitle'>Welcome to Hacker News</h1>
      <SignInForm history={history} />
      <div className='signupPassFrg'>
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    </div>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} className='signInForm'>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit" className='signin'>
          Sign In
        </button>

        { error && <p className='error-msg'>{error.message}</p> }
      </form>
    );
  }
}

const SignInLink = () =>
  <p>Want to log in to account?{' '}<Link to={routes.SIGN_IN}>Sign in</Link></p>

export default withRouter(SignInPage);

export {
  SignInForm,
  SignInLink,
};