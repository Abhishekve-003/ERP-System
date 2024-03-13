import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Piechart() {
  return (
      <PieChart 
        margin={2}
        series={[
          {
            data: [
              { id: 0, value: 1000, label: 'Order' },
              { id: 1, value: 1500, label: 'Product' },
              { id: 2, value: 2000, label: 'Sale' },
            ],
          },
        ]}
        height={260}
        slotProps={{
          legend: { padding: '20px' } 
        }}
      />
  );
}
