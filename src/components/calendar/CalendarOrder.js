import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Typography, Chip } from '@mui/material';
import CalendarView from './CalendarView';

const CalendarOrder = () => {
    const orders = [
        {
            id: "1",
            customer_name: "monu",
            delivery_date: "16-03-2024",
            status: "Success"
        },
        {
            id: "2",
            customer_name: "abhishek",
            delivery_date: "15-03-2024",
            status: "Success"
        },
        {
            id: "3",
            customer_name: "akash",
            delivery_date: "16-03-2024",
            status: "Success"
        },
        {
            id: "4",
            customer_name: "shivam",
            delivery_date: "15-03-2024",
            status: "Success"
        }
    ];
    const [selectedDate, setSelectedDate] = useState(""); 
    
    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

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

    const norepeat = { variant: "body1", fontWeight: "bold" }

    return (
        <TableContainer>
            <Table sx={{ border: '1px solid #e0e0e0' }}>
                <TableHead >
                    <TableRow >
                        <TableCell><Typography {...norepeat}>Order ID</Typography></TableCell>
                        <TableCell><Typography {...norepeat}>Customer Name</Typography></TableCell>
                        <TableCell><Typography {...norepeat}>Expected Delivery Date</Typography></TableCell>
                        <TableCell><Typography {...norepeat}>Status</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order, index) => (
                        <TableRow key={index}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.customer_name}</TableCell>
                            <TableCell>
                                    <CalendarView
                                            orders={orders}
                                            selectedDate={order.delivery_date}
                                            onDateSelect={handleDateSelect} 
                                            date = {order.delivery_date}
                                        />
                            </TableCell>
                            <TableCell>
                                <Chip
                                    label={order.status}
                                    color={getStatusColor(order.status)}
                                    variant="outlined"
                                    size="small"
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Typography p={2} display={'flex'} justifyContent={'center'}>Click on the date to retrieve all orders for that specific date.</Typography>
        </TableContainer>
    );
};

export default CalendarOrder;
