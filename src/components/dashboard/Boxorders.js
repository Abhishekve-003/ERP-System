import { Paper, Typography } from '@mui/material'
import React from 'react'
import { lightGreen } from '@mui/material/colors';
import Growchart from './Growchart1';


const Boxorders  = () => {
    const accent = lightGreen['A700'];
    return (
        <> 
            <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                <Typography  fontWeight="bold">Total Orders</Typography>
                <Typography variant='subtitle2'>146k</Typography>
                <Growchart/>
                <Typography variant='subtitle2' style={{ color: accent }}>+40k</Typography>
                <Typography variant='body2'>in last year</Typography>
            </Paper>
        </>
    )
}

export default Boxorders 