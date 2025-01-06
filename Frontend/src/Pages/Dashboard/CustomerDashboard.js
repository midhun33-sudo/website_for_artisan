import React from 'react';
import CustomerDetails from '../../Customer/CustomerDetails';
import CustomerNavbar from '../../components/NavBar/CustomerNavbar';

const CustomerDashboard = () => {
  return (
    <pagelayout>
      <CustomerNavbar />
      <div style={{ display: 'flex', marginTop: '60px' }}>
        <main style={{ flex: 1, padding: '20px', marginLeft: '40px' }}>
          <h1>Welcome to the Customer Dashboard</h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <CustomerDetails />
            
          </div>
        </main>
      </div>
    </pagelayout>
  );
};

export default CustomerDashboard;