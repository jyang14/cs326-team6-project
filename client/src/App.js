import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import { Auth0Provider } from './utils/auth0'
import Routes from './routes'

import './App.css'

function App () {
  return (
    <Auth0Provider redirectURI={window.location.origin}>
      <BrowserRouter>
        <div className='App'>
          <Routes />
        </div>
      </BrowserRouter>
    </Auth0Provider>
  )
}

export default App
