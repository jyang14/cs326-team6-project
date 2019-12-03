import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'

import { HomePage, LoginPage, Dashboard } from '../layouts'
import { useAuth0 } from '../utils/auth0'

function Routes () {
  const { loading } = useAuth0()

  if (loading) {
    return <CircularProgress />
  }

  return (
    <Switch>
      <Route exact path='/login' render={() => <LoginPage />} />
      <Route exact path='/dashboard' render={() => <Dashboard />} />
      <Route exact path='/' render={() => <HomePage />} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes
