import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

const navDetails = [
  {
    title: "Dashboard",
    value: "/"
  },
  {
    title: "Order",
    value: "/order"
  },
  {
    title: "Product",
    value: "/product"
  },
  {
    title: "Calendar",
    value: "/calendar"
  },
];

const getIcon = (title) => {
  switch (title) {
    case 'Dashboard':
      return <DashboardIcon />;
    case 'Order':
      return <AssignmentIcon />;
    case 'Product':
      return <ShoppingCartIcon />;
    case 'Calendar':
      return <CalendarTodayIcon />;
    default:
      return null;
  }
};

const NavigationList = () => {
  const navigate = useNavigate();

  return (
    <List>
      {navDetails.map((text) => (
        <ListItem key={text.title} disablePadding onClick={() => navigate(text.value)}>
          <ListItemButton>
            <ListItemIcon>
              {getIcon(text.title)}
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
