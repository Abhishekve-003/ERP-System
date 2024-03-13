import React from 'react';
import Typography from '@mui/material/Typography';
import OrdersList from './OrderList';

const OrderMain = () => {
  return (
    <div>
      <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center" p={1}>Orders Management</Typography>
      <OrdersList />
    </div>
  );
}

export default OrderMain;
