import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { clearUser } from '../features/userSlice';
import { Button, Layout } from 'antd'; 
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const CustomHeader = () => {
  const { email, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUser());
    navigate('/'); 
  };

  return (
    <Header style={{ backgroundColor: '#001529', padding: '0 20px' }}>
      <div style={{ float: 'left', color: 'white', fontSize:'30px' }}>
        {isLoggedIn ? email : 'Login to the Course Management System'}
      </div>
      {isLoggedIn && (
        <Button
          type="primary"
          style={{ float: 'right', marginTop: '15px' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      )}
    </Header>
  );
};

export default CustomHeader;
