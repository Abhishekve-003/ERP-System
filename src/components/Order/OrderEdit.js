import * as React from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';

export default function OrderEdit({ order, onUpdate, onDelete }) {
  const [open, setOpen] = React.useState(false);
  const [newStatus, setNewStatus] = React.useState(order.status);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    onUpdate(order.id, newStatus);
    handleClose();
  };

  const handleDelete = () => {
    onDelete(order.id);
    handleClose();
  };

  return (
    <>
      <Box display="flex" justifyContent='center'  alignItems="center">
      <Button variant='contained'  onClick={handleClickOpen}>
        Update Status
      </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleUpdate(); 
          },
        }}
      >
        <DialogTitle>Update Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update the status of this order:
          </DialogContentText>
          <RadioGroup
            aria-label="order-status"
            name="order-status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <FormControlLabel value="Success" control={<Radio />} label="Success" />
            <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
            <FormControlLabel value="Cancelled" control={<Radio />} label="Cancelled" />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Update 
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
