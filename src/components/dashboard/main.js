import React from 'react';
import { Grid } from '@mui/material';
import Boxes from './Boxes';
import Charts from './Charts';

const DashboardMain = () => {
  return (
    <Grid container spacing={2} p={1.5}>
          <Boxes />
          <Charts />
    </Grid>
  );
};

export default DashboardMain;
