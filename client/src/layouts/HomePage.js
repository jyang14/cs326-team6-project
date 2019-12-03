import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import MenuIcon from '@material-ui/icons/Menu'

import { NavigationDrawer } from '../components'
import { useAuth0 } from '../utils/auth0'

import './HomePage.css'

function HomePage () {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()
  const [open, setOpen] = useState(false)

  return (
    <div className='HomePage'>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            style={{ marginRight: '16px' }}
            onClick={() => {
              setOpen(true)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' style={{ flexGrow: 1 }}>
            Refrigerator Tracker
          </Typography>
          <Button
            color='inherit'
            onClick={() => {
              if (isAuthenticated) {
                logout()
              } else {
                loginWithPopup()
              }
            }}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
        <NavigationDrawer
          open={open}
          onClose={() => {
            setOpen(false)
          }}
          authenticated={isAuthenticated}
          login={() => {
            loginWithPopup()
          }}
          logout={() => {
            logout()
          }}
        />
      </AppBar>
      <Typography>TODO: Insert instructions</Typography>
    </div>
  )
}

export default HomePage
