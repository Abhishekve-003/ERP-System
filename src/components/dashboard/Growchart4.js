import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function Growchart4() {
  return (
    <Stack direction="row" sx={{ width: '70%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[1, 2, 3, 4, 3, 4, 5, 5]} height={50} />
      </Box>
    </Stack>
  );
}
