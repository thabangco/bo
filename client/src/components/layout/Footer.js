import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../img/virus.svg';

const Footer = () => {

  return (
    <nav className='bg-dark'>
      <div className='pb-12 pt-6 border-bottom border-gray-700'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm'>
              <Link className='navbar-brand' to='/'>
                <img src={logo} alt='' width='42px' />
              </Link>
              <p className='my-2 mb-4 text-muted'>&copy; { new Date().getFullYear() }, created with tons of <span role="img" aria-label=''>&#128420;</span> and <span role="img" aria-label=''>&#9749;</span> by thabang.</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Footer.propTypes = {
 
};

const mapStateToProps = state => ({
  
});

export default connect(
  mapStateToProps,
)(Footer);
