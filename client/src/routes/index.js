import React from 'react'

import { Switch, Redirect, Route } from 'react-router-dom'

import { HomePage, LoginPage } from '../layouts'

function Routes () {
  return (
    <Switch>
      <Route exact path='/login' render={() => <LoginPage />} />
      <Route exact path='/' render={() => <HomePage />} />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes
