import React from 'react'

import { useAuth0 } from '../utils/auth0'

import './LoginPage.css'

function LoginPage () {
  const { loginWithPopup, user } = useAuth0()
  return (
    <div>
      TODO: Login Page
      {JSON.stringify(user)}
      <button
        onClick={async () => {
          await loginWithPopup()
        }}
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage
