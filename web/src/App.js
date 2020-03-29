import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './config/reactotron';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes/index';
import GlobalStyle from './styles/global';
import history from './services/history';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={2000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
