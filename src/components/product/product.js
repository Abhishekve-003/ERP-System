import React, { useState } from 'react';
import { Box, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import BasicMenu from './BasicMenu';
import CustomForm from './CustomForm';
import EditProduct from './EditProduct';

const Product = () => {
    const [demotable, setDemotable] = useState([
        {
            product: "Application",
            category: "demo",
            stock: "134",
            description: "this is demo description",
            price: "45",
            available: true
        },
        {
            product: "Web Service",
            category: "demo2",
            stock: "146",
            description: "this is demo2 description",
            price: "56",
            available: false
        },
        {
            product: "Hosting Service",
            category: "cloud",
            stock: "126",
            description: "this is hosting description",
            price: "256",
            available: true
        },
        {
            product: "Domain Service",
            category: "cloud",
            stock: "16",
            description: "this is domain description",
            price: "167",
            available: true
        }
    ]);

    const [editIndex, setEditIndex] = useState(null);
    const [editData, setEditData] = useState({});
    const [openEditDialog, setOpenEditDialog] = useState(false);

    const addProduct = (productData) => {
        setDemotable([...demotable, productData]);
    };

    const deleteProduct = (index) => {
        const updatedDemotable = [...demotable];
        updatedDemotable.splice(index, 1);
        setDemotable(updatedDemotable);
    };
    

    const editProduct = (index, newData) => {
        setEditIndex(index);
        setEditData(newData);
        setOpenEditDialog(true);
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    };

    const handleEditDataChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setEditData({ ...editData, [name]: checked });
        } else {
            setEditData({ ...editData, [name]: value });
        }
    };
    
    const saveEditedData = () => {
        const updatedDemotable = [...demotable];
        updatedDemotable[editIndex] = editData;
        setDemotable(updatedDemotable);
        setOpenEditDialog(false);
    };

    const norepeat = { variant: "body1", fontWeight: "bold" }

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" p={1} mb={2} textAlign="center">Products Management
                <Box display="flex" justifyContent='flex-end' alignItems="center">
                    <CustomForm addProduct={addProduct} />
                </Box>
            </Typography>
            <TableContainer>
                <Table sx={{ border: '1px solid #e0e0e0' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography {...norepeat}>Product</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography {...norepeat}>Category</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography {...norepeat}>Stock</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography {...norepeat}>Description</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography {...norepeat}>Price (in $)</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography {...norepeat}>Available</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {demotable.map((productData, index) => (
                            <TableRow key={index}>
                                <TableCell>{productData.product}</TableCell>
                                <TableCell>{productData.category}</TableCell>
                                <TableCell>{productData.stock}</TableCell>
                                <TableCell>{productData.description}</TableCell>
                                <TableCell>{productData.price}</TableCell>
                                <TableCell>
                                      <Chip
                                        label={productData.available ? "Yes" : "No"}
                                        color={productData.available ? "success" : "error"}
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <BasicMenu
                                        onEdit={() => editProduct(index, productData)}
                                        onDelete={() => deleteProduct(index)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <EditProduct 
                open={openEditDialog} 
                onClose={handleCloseEditDialog} 
                editData={editData} 
                handleEditDataChange={handleEditDataChange} 
                saveEditedData={saveEditedData} 
            />
        </Box>
    );
}

export default Product;
