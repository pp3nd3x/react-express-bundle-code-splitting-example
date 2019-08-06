import React, { Fragment } from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

//
const LoadableHeader = Loadable({
  loader: () => import('./../components/Header'),
  loading: Loading
});

//
const LoadableFooter = Loadable({
  loader: () => import('./../components/Footer'),
  loading: Loading
});

//
const Content = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

const HomePage = () => {
  return (
    <Fragment>
      <LoadableHeader />
      <Content />
      <LoadableFooter />
    </Fragment>
  );
};

export default HomePage;
