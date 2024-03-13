import React from 'react';
import { Route, Routes } from "react-router-dom"
import DashboardMain from './components/dashboard/main';
import OrderMain from './components/Order/order';
import Dashboard from './pages/Dashboard';
import ProductMain from './components/product/ProductMain';
import CalendarMain from './components/calendar/Calendar';


const App =() => {
  return (
    <div >
      <Routes>

        <Route
          element={
            <Dashboard />
          }
        >
          <Route path="/" element={
            <DashboardMain />}
          />
          <Route path="/order" element={
            <OrderMain />
          } />
          <Route path="/product" element={
            <ProductMain />
          } />
          <Route path="/calendar" element={
            <CalendarMain/>
          } />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
