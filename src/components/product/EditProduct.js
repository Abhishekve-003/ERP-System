import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Checkbox, FormControlLabel, Box } from '@mui/material';

const EditProduct = ({ open, onClose, editData, handleEditDataChange, saveEditedData }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Product Details</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    label="Product"
                    name="product"
                    value={editData.product}
                    onChange={handleEditDataChange}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Category"
                    name="category"
                    value={editData.category}
                    onChange={handleEditDataChange}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Stock"
                    name="stock"
                    value={editData.stock}
                    onChange={handleEditDataChange}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={editData.description}
                    onChange={handleEditDataChange}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    onChange={handleEditDataChange}
                    InputProps={{
                        startAdornment: '$',
                      }}
                    value={editData.price}
                    variant="outlined"
                    margin="normal"
                />
                 <FormControlLabel
                    control={
                    <Checkbox
                        checked={editData.available}
                        onChange={handleEditDataChange}
                        name="available"
                        color="primary"
                    />
                    }
                    label="Available"
                />
                <Box display="flex" justifyContent='flex-end' alignItems="center">
                <Button variant="contained" color="primary" onClick={saveEditedData} style={{ marginTop: '1rem' }}>
                    Save Changes
                </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default EditProduct;
