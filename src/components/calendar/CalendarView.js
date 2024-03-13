import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';

import { Grid } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CalendarView({ orders, selectedDate, handle, date }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredOrders = orders.filter(order => order.delivery_date === selectedDate);

  return (
    <>
      <Button  color='info' variant='outlined'  onClick={handleClickOpen}>
        {date}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative'}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Order Details
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Back
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {filteredOrders.map(order => (
            <>
              <Grid key={order.id} sx={{ my: 3 }} flexDirection={'column'} container>
              <ListItemButton>
                <ListItemText primary={`Order ID: ${order.id}`} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={`Customer Name: ${order.customer_name}`} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={`Expected Delivery Date: ${order.delivery_date}`} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={`Status:`} />
                <Chip
                  label={order.status}
                  color={order.status === 'Success' ? 'success' : order.status === 'Pending' ? 'warning' : 'error'}
                />
              </ListItemButton>
              <Divider/>
              <Divider/>
              </Grid>
            </>
          ))}
        </List>
      </Dialog>
    </>
  );
}
