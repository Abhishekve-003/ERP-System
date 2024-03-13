import React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import Piechart from './Piechart';
import Linechart from './Linechart';
import { Link } from 'react-router-dom';


const Charts = () => {
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Paper >
          <Linechart />
        </Paper>
            <Grid display={'flex'} justifyContent={'center'} m={1.3}> 
                  <Link to="/product">
                        <Button size='small' variant='contained' sx={{ borderRadius: '12px' }}>
                               Go to Products Management
                        </Button>
                  </Link>
            </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Paper >
          <Piechart />
        </Paper>
          <Grid display={'flex'} justifyContent={'center'} m={1.3}> 
                <Link to="/order">
                    <Button size='small' variant='contained' sx={{ borderRadius: '12px' }}>
                        Go to Orders Management
                    </Button>
                </Link>
          </Grid>
      </Grid>
    </>
  );
};

export default Charts;
