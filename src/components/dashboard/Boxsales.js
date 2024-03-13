import { Paper, Typography } from '@mui/material'
import React from 'react'
import { lightGreen } from '@mui/material/colors';
import Growchart3 from './Growchart3';

const Boxsales = () => {
    const accent = lightGreen['A700'];
    return (
      <>
         <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                  <Typography fontWeight="bold">Total Sales</Typography>
                  <Typography variant='subtitle2'>$254k</Typography>
                  <Growchart3/>
                  <Typography variant='subtitle2' style={{ color: accent }}>+$57k</Typography>
                  <Typography variant='body2'>in last year</Typography>
              </Paper>
      </>
    )
}

export default Boxsales