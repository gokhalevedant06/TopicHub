import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from 'react-redux'
import store from './Redux/store'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <ChakraProvider>
    <Provider store={store}>
    <App />
    </Provider>
  </ChakraProvider>
  </BrowserRouter>
)

