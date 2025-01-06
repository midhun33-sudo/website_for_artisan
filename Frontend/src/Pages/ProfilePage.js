import React from 'react';
//import Sidebar from '../Sidebar';
import CustomerDetails from '../Customer/CustomerDetails';
import OrderList from './OrderPage/OrderList';

const ProfilePage = () => {
  return (
    <pagelayout>
      <div style={{ display: 'flex', marginTop: '60px' }}>
    
        <main style={{ flex: 1, padding: '20px', marginLeft: '40px' }}>
          <h1>Welcome to the Customer Dashboard</h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <CustomerDetails />
            <OrderList/>
          </div>
        </main>
      </div>
    </pagelayout>
  );
};

export default ProfilePage;