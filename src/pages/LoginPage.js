import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { setUser } from '../features/userSlice';
import { Button, Input, message } from 'antd';
import '../styles/AuthPage.scss';

const LoginPage = ({ role }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      message.error('Please fill out all fields');
      return;
    }
    dispatch(login({ role }));
    dispatch(setUser({ email, isLoggedIn: true }));

    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'teacher') {
      navigate('/teacher');
    }
  };

  return (
    <div className="auth-container">
      <h1>Login as {role}</h1>
      <Input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input.Password
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="primary" onClick={handleLogin}>Login</Button>

      <div className="auth-links">
        <Link to="/register" state={{ role }}>Register</Link>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default LoginPage;
