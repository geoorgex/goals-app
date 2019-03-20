import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import { WithStyles, withStyles } from '@material-ui/styles';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const Header: React.FC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <AppBar position={'static'}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Buzer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
