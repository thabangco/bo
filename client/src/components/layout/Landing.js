import React from 'react';
import SouthAfrica from './covid/SouthAfrica';
import World from './covid/World';

const Landing = () => {

  return (
    <section className='container py-12'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <div className='my-12'/>
          <h2>Covid-19 &mdash; Outbreak, South Africa.</h2>
          <SouthAfrica/>
          <World/>
          <p className='mb-12' style={{ borderLeft: '2px solid #e9ecef', paddingLeft: '5px', color: '#e9ecef', fontWeight: 'bold' }}>updated... {new Date().toJSON().slice(0,10).replace(/-/g,' . ')}</p>
        </div>
      </div>
    </section>
  );
};

export default Landing;