import * as React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { redirect } from '../../router/history';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
const moment = require('moment');

const styles = createStyles({
  root: {
    width: '95%',
    maxWidth: 600,
    margin: 'auto',
    marginTop: 200,
  },
  headline: {
    paddingBottom: '20px',
  },
});

const CreateMonth: React.FC<WithStyles<typeof styles>> = ({ classes }) => {
  const handleChange = () => {
    redirect('/newMonth');
  };

  return (
    <Grid container direction={'column'} alignItems={'center'} className={classes.root}>
      <Typography variant={'headline'} className={classes.headline}>
        Goals for {moment().format('MMMM')} has not been created
      </Typography>
      <Button color={'primary'} onClick={handleChange} variant={'contained'} size={'large'}>
        Create now
      </Button>
    </Grid>
  );
};

export default withStyles(styles)(CreateMonth);
