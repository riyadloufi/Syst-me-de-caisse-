import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from './reduce center/reducer'; // Le Reducer
import App from './App'; // Le composant principal de l'application

import PaymentInterface from './Pay page/Pay';

import StockManager from './Stock/StockManager';

import RouterManeger from './RoutingCenter';

// Créez le store Redux
const store = createStore(Reducer);

// Rendu principal
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouterManeger /> {/* Remplacez <Reducer /> par <App /> */}
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
