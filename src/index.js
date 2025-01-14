import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Navbar from './Navbar';
import ParamsListCmds from './orders/Orders_filters';
import OrdersPage from './orders/Orders_list';
import HistoryPage from './historique/HistoryPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryPage />
  </React.StrictMode>
);
