import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li className='nav-item'>
        <Link className='nav-link' to='/profiles'>Developers</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/posts'>Posts</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/dashboard'>
          Dashboard
        </Link>
      </li>
      <li className='nav-item'>
        <a onClick={logout} href='#!'>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav ml-xl-auto'>
      <li className='nav-item'>
        <Link className='nav-link' to='/profiles'>Developers</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>Register</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar navbar-expand-xl navbar-light shadow-lg fixed-top bg-white'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          thabang.
        </Link>
      {!loading && (
        <Fragment>
          {isAuthenticated ? authLinks : guestLinks}
        </Fragment>
      )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
