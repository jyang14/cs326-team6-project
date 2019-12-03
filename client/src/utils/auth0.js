import React, { useState, useEffect, useContext } from 'react'

import config from './auth0Secret'

import createAuth0Client from '@auth0/auth0-spa-js'

// Based on https://github.com/auth0-samples/auth0-react-samples/blob/master/01-Login/src/react-auth0-spa.js

/** @typedef {import('@auth0/auth0-spa-js/dist/typings/Auth0Client').default} Auth0Client  */

const defaultAuth0Context = {
  isAuthenticated: true,
  user: {},
  loading: false,
  popupOpen: false,
  loginWithPopup: () => new Promise(resolve => resolve()),
  getIdTokenClaims: () => new Promise(resolve => resolve()),
  getTokenSilently: () => new Promise(resolve => resolve()),
  getTokenWithPopup: () => new Promise(resolve => resolve()),
  logout: () => {}
}

/**
 * @type {React.Context<
 *    {
 *      isAuthenticated: boolean,
 *      user: any,
 *      loading: boolean,
 *      popupOpen: boolean,
 *      loginWithPopup: Auth0Client['loginWithPopup']
 *      getIdTokenClaims: Auth0Client['getIdTokenClaims']
 *      getTokenSilently: Auth0Client['getTokenSilently']
 *      getTokenWithPopup: Auth0Client['getTokenWithPopup']
 *      logout: Auth0Client['logout']
 *    }
 *  >}
 */
export const Auth0Context = React.createContext(defaultAuth0Context)
export const useAuth0 = () => useContext(Auth0Context)

/**
 *
 * @param {{
 *   children: any;
 *   redirectURI: string;
 * }} param0
 */
export const Auth0Provider = ({ children, redirectURI }) => {
  const [isAuthenticated, setIsAuthenticated] = useState()
  const [user, setUser] = useState()
  /** @type {[Auth0Client, React.Dispatch<React.SetStateAction<Auth0Client>>]} */
  const [auth0Client, setAuth0] = useState(null)
  const [loading, setLoading] = useState(true)
  const [popupOpen, setPopupOpen] = useState(false)

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client({
        redirect_uri: redirectURI,
        client_id: config.clientId,
        domain: config.domain
      })
      setAuth0(auth0FromHook)

      const isAuthenticated = await auth0FromHook.isAuthenticated()

      setIsAuthenticated(isAuthenticated)

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser()
        setUser(user)
      }

      setLoading(false)
    }
    initAuth0()
  }, [redirectURI])

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true)
    try {
      await auth0Client.loginWithPopup(params)
    } catch (error) {
      console.error(error)
    } finally {
      setPopupOpen(false)
    }
    const user = await auth0Client.getUser()
    setUser(user)
    setIsAuthenticated(true)
  }

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  )
}
