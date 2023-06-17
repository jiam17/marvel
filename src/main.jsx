import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain='dev-6l4lpu4h45fqeis0.us.auth0.com'
  clientId='37UgNUcIdbdegxq2ccJyfrUObc9QDLQR'
  redirectUri={window.location.origin}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>
)
