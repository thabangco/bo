import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import logo from '../../img/virus.svg';

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
        <button type="button" class="btn btn-link btn-sm rounded" data-toggle="modal" data-target="#staticBackdrop">
          <svg class="bi bi-question-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd" />
            <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
        </button>
      </li>
    </ul>
  );

  return (
    <div>
      <div class="modal fade rounded" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
                <h6>About this data</h6>
                <p>This data changes rapidly and might not reflect some cases still being reported.</p>
                <h6>Sources &amp; resources</h6>
                <p className='m-3'><a href="https://sacoronavirus.co.za/" target="_blank" rel="noopener noreferrer">sacoronavirus.co.za/</a></p>
                <p className='m-3'><a href="https://github.com/NovelCOVID/API" target="_blank" rel="noopener noreferrer">github.com/NovelCOVID/API</a></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-xs rounded btn-link mx-auto" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <nav className='navbar navbar-expand-xl navbar-light shadow-lg fixed-top bg-white'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='' width='42px' />
          </Link>
          {!loading && (
            <Fragment>
              {isAuthenticated ? authLinks : guestLinks}
            </Fragment>
          )}
        </div>
      </nav>
    </div>
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
