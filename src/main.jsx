import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd'; // Import ConfigProvider from Ant Design
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'
import store from './app/store.js';

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <ConfigProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </StrictMode>
  </Router>,
);
