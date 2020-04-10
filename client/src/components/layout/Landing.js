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
          <p className='my-10'>made by thabang &mdash; <a href="https://github.com/NovelCOVID/API" target="_blank" rel="noopener noreferrer">data sources here.</a></p>
        </div>
      </div>
    </section>
  );
};

export default Landing;