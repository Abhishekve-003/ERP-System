import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Typography, Chip } from '@mui/material';
import OrderDetails from './OrderDetails';

const OrdersList = () => {
  const [orders, setOrders] = useState([
    {
      id: "1",
      customer_name: "monu",
      order_date: "09-03-2024",
      status: "Success"
    },
    {
      id: "2",
      customer_name: "abhishek",
      order_date: "11-03-2024",
      status: "Pending"
    },
    {
      id: "3",
      customer_name: "akash",
      order_date: "12-03-2024",
      status: "Success"
    },
    {
      id: "4",
      customer_name: "shivam",
      order_date: "13-03-2024",
      status: "Cancelled"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success':
        return 'success';
      case 'Pending':
        return 'warning';
      default:
        return 'error';
    }
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(prevOrders =>
      prevOrders.filter(order => order.id !== orderId)
    );
  };

const norepeat={ variant: "body1", fontWeight: "bold"}
 

  return (
    <TableContainer>
      <Table sx={{ border: '1px solid #e0e0e0' }}>
        <TableHead >
          <TableRow >
            <TableCell><Typography {...norepeat}>Order ID</Typography></TableCell>
            <TableCell><Typography {...norepeat}>Customer Name</Typography></TableCell>
            <TableCell><Typography {...norepeat}>Order Date</Typography></TableCell>
            <TableCell><Typography {...norepeat}>Status</Typography></TableCell>
            <TableCell><Typography {...norepeat}>Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer_name}</TableCell>
              <TableCell>{order.order_date}</TableCell>
              <TableCell>
                <Chip
                  label={order.status}
                  color={getStatusColor(order.status)}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell>
                <OrderDetails
                  order={order}
                  onUpdate={handleUpdateOrderStatus}
                  onDelete={handleDeleteOrder}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersList;
