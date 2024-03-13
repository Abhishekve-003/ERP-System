import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [3400, 3000, 2000, 2780, 1890, 2390, 4000];
const xLabels = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
];

export default function Linechart() {
  return (
    <LineChart
      height={260}
      series={[{ data: uData, label: 'Orders in last Week', area: true, showMark: true }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
    />
  );
}
