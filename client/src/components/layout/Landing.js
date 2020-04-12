import React from 'react';
import SouthAfrica from './covid/SouthAfrica';
import World from './covid/World';
import Alert from './Alert';

const Landing = () => {

  return (
    <section className='container py-12'>
          <div className='' />
          <Alert/>
          <SouthAfrica/>
          <World/>
          <label className='mb-12 small'>data updates every 10 min.</label>
          <p className='mt-12 small font-weight-bold'>&copy; 2020, made by thabang.</p>
    </section>
  );
};

export default Landing;