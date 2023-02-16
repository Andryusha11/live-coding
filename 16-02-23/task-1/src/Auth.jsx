import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isSpinnerOn: false,
    };
  }

  onLoginButton = () => {
    this.setState({
      isSpinnerOn: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isSpinnerOn: false,
      });
    }, 2000);
  };

  onLogoutButton = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Logout onLogout={this.onLogoutButton} />;
    } else {
      button = this.state.isSpinnerOn ? (
        <Spinner size={50} />
      ) : (
        <Login onLogin={this.onLoginButton} />
      );
    }
    return <>{button}</>;
  }
}

export default Auth;
