import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from 'react-redux'
import { store, persistor } from "./Redux/store";
import { SnackbarProvider } from 'notistack';
import { PersistGate } from "redux-persist/integration/react";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={1}
    
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    >
  <ChakraProvider>
    <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>loading ...</div>}>
    <App />
    </PersistGate>
    </Provider>
  </ChakraProvider>
  </SnackbarProvider>
  </BrowserRouter>
)

