import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Simulate form submission
    console.log('Logging in with:', { email, password });

    if (email && password) {
      alert('Login successful!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      {/* Inline CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
        }
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f4;
        }
        .login-form {
          background-color: #fff;
          padding: 20px 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }
        .login-form h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .form-group input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
        }
        .login-btn {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }
        .login-btn:hover {
          background-color: #0056b3;
        }
        .login-btn:focus {
          outline: none;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
        }
      `}</style>

      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
