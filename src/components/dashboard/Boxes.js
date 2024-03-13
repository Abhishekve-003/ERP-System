import React from 'react';
import { Grid } from '@mui/material';
import Boxorders from './Boxorders';
import Boxproducts from './Boxproducts';
import Boxsales from './Boxsales';
import Boxcustomers from './Boxcustomers';

const Boxes = () => {
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={3}>
             <Boxorders/>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
              <Boxproducts/>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
              <Boxsales/>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
              <Boxcustomers/>
      </Grid>
    </>
  );
};

export default Boxes;
