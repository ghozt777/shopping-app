import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {UsersProvider} from './components/UsersProvider'
import {AuthProvider} from './components/AuthProvider'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UsersProvider>
      <AuthProvider>
          <App />
      </AuthProvider>
    </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
