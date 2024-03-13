import * as React from 'react';
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
import OrderEdit from './OrderEdit';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderDetails({ order, onUpdate, onDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" sx={{ borderRadius: '16px' }} onClick={handleClickOpen}>
        View Details
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
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary={`Order ID: ${order.id}`} />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary={`Customer Name: ${order.customer_name}`} />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary={`Order Date: ${order.order_date}`} />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary={`Status:`} />
            <Chip
              label={order.status}
              color={order.status === 'Success' ? 'success' : order.status === 'Pending' ? 'warning' : 'error'}
            />
          </ListItemButton>
          <OrderEdit order={order} onUpdate={onUpdate} onDelete={onDelete} />
        </List>
      </Dialog>
    </>
  );
}
