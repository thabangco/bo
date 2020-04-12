import React from 'react';
import logo from '../../img/virus.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light shadow-lg fixed-top bg-white">
      <div className="container">

        <a className="navbar-brand" href="/">
          <img src={logo} alt='' width='42px' /> &nbsp; nCov19 &mdash; South Africa.
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLandingCollapse" aria-controls="navbarLandingCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarLandingCollapse">

          <ul className="navbar-nav ml-xl-auto">
            
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/novelcovid/api" data-toggle="smooth-scroll">Sources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://sacoronavirus.co.za" data-toggle="smooth-scroll">SA portal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.who.int" data-toggle="smooth-scroll">WHO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/thabangco/bo" data-toggle="smooth-scroll">About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="mailto:thabang@vuyiswa.com" data-toggle="smooth-scroll">Send feedback</a>
            </li>
          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
