import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Course Management System</h1>
      <Link to="/login/admin">
        <Button type="primary" style={{ marginBottom: '20px' }}>Login as Admin</Button>
      </Link>
      <Link to="/login/teacher">
        <Button type="primary">Login as Teacher</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
