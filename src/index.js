import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/campers">
        <PersistGate persistor={persistor} loading={<Loader />}>
          <App />
        </PersistGate>
      </BrowserRouter>{' '}
    </Provider>
  </React.StrictMode>
);
