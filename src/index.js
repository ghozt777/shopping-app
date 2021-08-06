import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {UsersProvider} from './components/UsersProvider'
import {AuthProvider} from './components/AuthProvider'
import {ApiProvider} from './components/FakeApi'
import {LoadingProvider} from './components/LoadingProvider'
import {ProductsProvider} from './components/ProductsProvider'
import {CartProvider} from './components/CartProvider'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <ProductsProvider>
      <UsersProvider>
        <LoadingProvider>
          <ApiProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ApiProvider>
        </LoadingProvider>
      </UsersProvider>
      </ProductsProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
