import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function Growchart() {
  return (
    <Stack direction="row" sx={{ width: '70%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[1, 4, 2, 5, 7, 2, 5, 8]} height={50} />
      </Box>
      
    </Stack>
  );
}
