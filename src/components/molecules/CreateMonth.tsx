import * as React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { redirect } from '../../router/history';
const moment = require('moment');

const CreateMonth = () => {
  const handleChange = () => {
    redirect('/newMonth');
  };

  return (
    <Grid container direction={'column'} alignItems={'center'}>
      Goals for {moment().format('MMMM')} has not been created
      <Button color={'primary'} onClick={handleChange}>
        Create now
      </Button>
    </Grid>
  );
};

export default CreateMonth;
