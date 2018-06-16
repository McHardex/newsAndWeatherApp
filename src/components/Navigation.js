import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import AuthUserContext from './AuthUserContext';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <div class='navigation'>
    <p><Link to={routes.LANDING}>Landing</Link></p>
    <p><Link to={routes.HOME}>Home</Link></p>
    <p><Link to={routes.ACCOUNT}>Account</Link></p>
    <p><SignOutButton /></p>
  </div>

const NavigationNonAuth = () =>
  <div class='navigation'>
    <p><Link to={routes.LANDING}>Landing</Link></p>
    <p><Link to={routes.SIGN_IN}>Sign In</Link></p>
  </div>

export default Navigation;