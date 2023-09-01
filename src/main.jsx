import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './assets/index.css'
import Login from './components/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>,
)
