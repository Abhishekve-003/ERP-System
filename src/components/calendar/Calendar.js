import React from 'react'
import { Typography } from '@mui/material'
import CalendarOrder from './CalendarOrder'

const CalendarMain = () => {
  return (
    <>
    <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center" p={1}>Calendar View</Typography>
      <CalendarOrder/>
    </>
  )
}

export default CalendarMain