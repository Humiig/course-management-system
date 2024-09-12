import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';
import { login } from '../features/authSlice';
import { Button, Input, message } from 'antd';
import '../styles/AuthPage.scss';

const RegisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const role = location.state?.role || 'user';  

  const handleRegister = () => {
    if (!email || !password) {
      message.error('Please fill out all fields');
      return;
    }
    dispatch(setUser({ email, isLoggedIn: true }));
    dispatch(login({ role }));

    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'teacher') {
      navigate('/teacher');
    }
  };

  return (
    <div className="auth-container">
      <h1>Register as {role}</h1>
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
      <Button type="primary" onClick={handleRegister}>Register</Button>
    </div>
  );
};

export default RegisterPage;
