import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderAuthHeader() {
    if (this.props.auth.authenticated) {
      return (
        <li>
          <Link to="/signout">Logout</Link>
        </li>
      );
    }
    return [
      <li key={1}>
        <Link to="/signin">Sign in</Link>
      </li>,
      <li key={2}>
        <Link to="/signup">Sign up</Link>
      </li>
    ];
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Car Sharing
          </a>
          <ul className="right">
            {this.renderAuthHeader()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Header);
