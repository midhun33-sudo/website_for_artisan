
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Include styling if needed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Customer');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      alert('Please enter email and password.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userType', data.userType); // Save userType to local storage
  
        // Navigate to respective layout pages
        if (data.userType === 'Artisan') {
          navigate('/artisan-dashboard');
        } else {
          navigate('/customer-dashboard');
        }
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred during login.');
    }
  };
  
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate('/register')} className="register-link">
        Don't have an account? Register here.
      </p>
    </div>
  );
};

export default LoginPage;
