import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Navigate or handle successful login
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="login-grid">
        {/* Header */}
        <div className="login-text">
          <h2>Login</h2>
        </div>

        {/* Sign Up Link */}
        <div className="login-text">
          Are you a new member?{' '}
          <span>
            <Link to="/signup" className="btn btn-link">
              Sign Up Here
            </Link>
          </span>
        </div>
        <br />

        {/* Login Form */}
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Buttons */}
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-danger mb-2 waves-effect waves-light"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
            <br />

            {/* Forgot Password Link */}
            <div className="login-text">
              <Link to="/forgot-password" className="btn btn-link">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
