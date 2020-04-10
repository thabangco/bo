import React from 'react';
import SouthAfrica from './covid/SouthAfrica';
import Virus from '../../img/virus.svg';

const Landing = () => {

  return (
    <section className='container py-12'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <img src={Virus} alt={Virus} width="80" className='mb-7'/>
          <h2>Covid-19 &mdash; Outbreak, South Africa.</h2>
          <SouthAfrica/>
          <p className='mb-12' style={{ borderLeft: '2px solid #e9ecef', paddingLeft: '5px', color: '#e9ecef', fontWeight: 'bold' }}>as of, {new Date().toJSON().slice(0,10).replace(/-/g,' . ')}</p>
          <p className='my-10'>Created with tons of <span role="img" aria-label=''>&#128420;</span> and <span role="img" aria-label=''>&#9749;</span> by thabang &mdash; <a href="https://github.com/NovelCOVID/API" target="_blank" rel="noopener noreferrer">data sources</a> and resource portal <a href="https://sacoronavirus.co.za/" target="_blank" rel="noopener noreferrer">here.</a></p>
        </div>
      </div>
    </section>
  );
};

export default Landing;