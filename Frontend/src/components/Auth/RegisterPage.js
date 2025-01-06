import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // Include styling if needed

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('Customer');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, userType }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Registration successful.');
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userType', data.userType); // Save userType to local storage
  
        // Navigate to respective layout pages
        if (data.userType === 'Artisan') {
          navigate('/artisan-dashboard');
        } else {
          navigate('/customer-dashboard');
        }
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration.');
    }
  };
  

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="Customer">Customer</option>
          <option value="Artisan">Artisan</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <p onClick={() => navigate('/login')} className="login-link">
        Already have an account? Login here.
      </p>
    </div>
  );
};

export default RegisterPage;
