// src/pages/LoginPage.jsx
import React from 'react';
import LoginButton from '../../components/Button/LoginButton';
import CheckDatabaseConnection from '../../components/Another/CheckDatabaseConnection';

const LoginPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Chào mừng đến với Calendar of Life</h1>
      <LoginButton />
      <CheckDatabaseConnection />
    </div>
  );
};

export default LoginPage;
