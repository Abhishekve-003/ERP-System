import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

export default function CustomForm({ addProduct }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    product: '',
    category: '',
    stock: '',
    description: '',
    price: '',
    available: true
  });
  const [formError, setFormError] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
   
    const newValue = type === 'checkbox' ? checked : value;

    
    if (name === 'stock' || name === 'price') {
      if (parseInt(value) < 0) {
        return; 
      }
    }

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = () => {
    
    const isEmptyField = Object.values(formData).some(value => {
      if (typeof value === 'string') {
        return value.trim() === '';
      }
      return false;
    });
    if (isEmptyField) {
      setFormError('Please fill out all fields.');
      return;
    } else {
      setFormError('');
    }
  
    addProduct(formData);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Add New Product
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the details for the new product.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="product"
            name="product"
            label="Product"
            type="text"
            fullWidth
            value={formData.product}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="category"
            name="category"
            label="Category"
            type="text"
            fullWidth
            value={formData.category}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="stock"
            name="stock"
            label="Stock"
            type="number"
            fullWidth
            value={formData.stock}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={formData.description}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="price"
            name="price"
            label="Price"
            type="number"
            fullWidth
            InputProps={{
              startAdornment: '$',
            }}
            value={formData.price}
            onChange={handleInputChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.available}
                onChange={handleInputChange}
                name="available"
                color="primary"
              />
            }
            label="Available"
          />
          {formError && (
            <Typography color="error">{formError}</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Product</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
