import { Paper, Typography } from '@mui/material'
import React from 'react'
import { lightGreen } from '@mui/material/colors';
import Growchart2 from './Growchart2';

const Boxproducts = () => {
    const accent = lightGreen['A700'];
  return (
    <>
       <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                <Typography fontWeight="bold">Total Products</Typography>
                <Typography variant='subtitle2'>160k</Typography>
                <Growchart2/>
                <Typography variant='subtitle2' style={{ color: accent }}>+40k</Typography>
                <Typography variant='body2'>in last year</Typography>
            </Paper>
    </>
  )
}

export default Boxproducts
