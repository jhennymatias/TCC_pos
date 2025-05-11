import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login realizado com sucesso:', response);
    alert('Login bem-sucedido!');
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
