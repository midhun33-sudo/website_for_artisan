import React from 'react';
//import Sidebar from '../Sidebar';
//import Navbar from '../components/Navbar';
import ArtisanDetails from '../../Artisan/ArtisanDetails';
import ArtisanActivity from '../../Artisan/ArtisanActivity';
//import SalesBoard from '../../components/SalesBoard/SalesBoard';
import ArtisanNavbar from '../../components/NavBar/ArtisanNavbar';

const ArtisanDashboard = () => {
  return (
      <div>
        <ArtisanNavbar />
        <main style={{ flex: 1, padding: '20px', margin: '50px' }}>
          <h1>Welcome to the Artisan Dashboard</h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <ArtisanDetails />
            <ArtisanActivity />
          </div>
        </main>
      </div>
  );
};

export default ArtisanDashboard;