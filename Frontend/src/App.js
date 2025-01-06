import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NavBar from './components/Navbar';
import WelcomePage from './components/WelcomePage/WelcomePage';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import HomePage from './Pages/HomePage';
import SalesBoard from './Artisan/SalesBoardPage';
import ProductDetalis from './components/SalesBoard/ProductDetails';
import Order from './Artisan/OrderPage/OrderPage';
import Orders from './Pages/OrderPage/OrderList';
import OrderDetails from './Pages/OrderPage/OrderDetails';
import OrdersDetails from './Artisan/OrderPage/OrderDetails';
import ArtisanDashboard from './Pages/Dashboard/ArtisanDashboard';
import CustomerDashboard from './Pages/Dashboard/CustomerDashboard';
import EventList from './Pages/Events/EventList/EventList';
import EventPage from './Pages/Events/EventPage/EventPage';
import AddEventForm from './Artisan/Event/AddEventForm';
import ProductDetails from "./Pages/Events/ProductDetails";
import PurchaseForm from "./Pages/PurchaseForm";
import Event from "./Artisan/Event/EventList";
import ProductManagement from './Artisan/Product/ProductManagement';
import CustSales from './Pages/Sales/CustSales';
import SalesList from './Artisan/SalesList';
import ProDetails from './Artisan/Event/ProductDetails';
import HomePage1 from './Customer/HomePage';

//import OrderDetails from './pages/Orders/OrderDetails';
//import Events from './pages/Events/Events';
//import Profile from './pages/Profile/Profile';
//<Route path="/" element={<Home />} />
//<Route path="/orders/:id" element={<OrderDetails />} />
//<Route path="/events" element={<Events />} />
//<Route path="/profile" element={<Profile />} />

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/artisan-dashboard" element={<ArtisanDashboard />} />
        <Route path="/sales-board" element={<SalesBoard />} />
        <Route path="/sales-list" element={<SalesList />} />
        <Route path="/event" element={<EventList />} />
        <Route path="/event/event-page" element={<EventPage />} />
        <Route path="/product-details/:productId" element={<ProductDetalis />} />
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/:id" element={<OrdersDetails />} />
        <Route path="/product/:id" element={<ProDetails />} />

        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/home-cust" element={<HomePage1 />} />
        <Route path="/cust-sales" element={<CustSales />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders-details" element={<OrderDetails />} />
        <Route path="/events/add" element={<AddEventForm />} />
        <Route path="/events" element={<Event />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/buy/:productId" element={<PurchaseForm />} />
      </Routes>
    </Router>
  );
};

export default App;