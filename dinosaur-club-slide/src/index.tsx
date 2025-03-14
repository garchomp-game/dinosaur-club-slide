import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React 18のcreateRoot APIを使ったレンダリング
const rootElement = document.getElementById('root');

// rootがnullでないことを確認
if (!rootElement) {
  console.error('Root element not found! The app cannot be mounted.');
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
