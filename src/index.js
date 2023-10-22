import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
      <GlobalStyle />
    </Provider>
    <Toaster position="top-right" reverseOrder={false} gutter={8} />
  </React.StrictMode>
);
