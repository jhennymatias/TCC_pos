// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Elemento com id="root" não encontrado no index.html');
} else {
  ReactDOM.createRoot(rootElement).render(
    <GoogleOAuthProvider clientId="711102655528-et96vh5i6s23ouqmd8hnet65pabi1jne.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}
