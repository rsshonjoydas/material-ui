import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
});

const Layout = ({ children }) => {
  const classes = useStyle();
  return <div className={classes.page}>{children}</div>;
};

export default Layout;
