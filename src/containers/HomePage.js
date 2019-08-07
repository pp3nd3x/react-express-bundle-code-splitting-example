import React, { Fragment } from 'react';
import Loadable from 'react-loadable';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '90vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  }
}));

const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        {'Example of code splitting using ExpressJS, ReactJS and Webpack'}
      </Typography>
    </Container>
  );
};

const HomePage = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <LoadableHeader />
      <div className={classes.root}>
        <Content />
        <LoadableFooter />
      </div>
    </Fragment>
  );
};

export default HomePage;
