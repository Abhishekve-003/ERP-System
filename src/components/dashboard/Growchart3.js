import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function Growchart3() {
  return (
    <Stack direction="row" sx={{ width: '70%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[1, 2, 4, 3, 5, 6, 4, 8]} height={50} />
      </Box>
    </Stack>
  );
}
