import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Navbar from './Navbar';
import ParamsListCmds from './Liste_cmds';
import Liste_cmds_main from './Liste_cmds_main';
import OrdersPage from './orders/Orders_list';
import HistoryPage from './historique/HistoryPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryPage />
  </React.StrictMode>
);
