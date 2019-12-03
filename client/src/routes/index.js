import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'

import { HomePage, LoginPage, Fridge } from '../layouts'
import { useAuth0 } from '../utils/auth0'

function Routes () {
  const { loading } = useAuth0()

  if (loading) return ''

  return (
    <Switch>
      <Route exact path='/login' render={() => <LoginPage />} />
      <Route exact path='/fridge' render={() => <Fridge />} />
      <Route exact path='/' render={() => <HomePage />} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes
