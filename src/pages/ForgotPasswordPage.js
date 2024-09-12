import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/AuthPage.scss';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = () => {
    if (!email) {
      message.error('Please enter your email.');
      return;
    }

    setLoading(true);

    fakeForgotPasswordAPI(email)
      .then(() => {
        message.success('Password reset link sent to your email.');
        setEmail('');
      })
      .catch(() => {
        message.error('Failed to send reset link. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fakeForgotPasswordAPI = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'success@example.com') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };

  return (
    <div className="auth-container">
      <h1>Forgot Password</h1>
      <Input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="primary" onClick={handleForgotPassword} loading={loading}>
        Send Reset Link
      </Button>
      <div className="auth-links">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
