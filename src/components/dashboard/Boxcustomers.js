import { Paper, Typography } from '@mui/material'
import React from 'react'
import { lightGreen } from '@mui/material/colors';
import Growchart4 from './Growchart4';

const Boxcustomers = () => {
    const accent = lightGreen['A700'];
    return (
      <>
         <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                  <Typography fontWeight="bold">Total Customers</Typography>
                  <Typography variant='subtitle2'>127k</Typography>
                  <Growchart4/>
                  <Typography variant='subtitle2' style={{ color: accent }}>+36k</Typography>
                  <Typography variant='body2'>in last year</Typography>
          </Paper>
      </>
    )
}

export default Boxcustomers