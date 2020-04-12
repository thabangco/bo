import React from 'react';
import { Route } from 'react-router-dom';
import Spinner from '../layout/Spinner';

const PrivateRoute = ({
  component: Component, loading, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      loading ? (
        <Spinner />
      ) :  (
        <Component {...props} />
      ) 
    }
  />
);

export default PrivateRoute;
