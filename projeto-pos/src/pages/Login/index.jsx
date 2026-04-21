import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()
  const handleLoginSuccess = (response) => {
    navigate('/home ')
  };

  const handleLoginFailure = () => {
    console.log('Erro no login');
    alert('Erro ao tentar fazer login');
  };

  return (
    <div>
      <h1>Login com Google</h1>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
};

export default LoginPage;
