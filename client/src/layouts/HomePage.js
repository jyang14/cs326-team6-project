import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import MenuIcon from '@material-ui/icons/Menu'

import { NavContainer } from '../components/organisms'
import { useAuth0 } from '../utils/auth0'
import { useFoodApi } from '../utils/api'

import './HomePage.css'

function HomePage () {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()
  const { post: addFood } = useFoodApi()

  const [navOpen, setNavOpen] = useState(false)
  const [status, setStatus] = useState({ open: false, message: '' })

  return (
    <div className='HomePage'>
      <NavContainer
        authenticated={isAuthenticated}
        login={() => {
          loginWithPopup()
        }}
        logout={() => {
          logout()
        }}
        onAddFood={async food => {
          try {
            await addFood(food)
            setStatus({ open: true, message: 'Food added to fridge' })
          } catch (e) {
            setStatus({ open: true, message: 'Failed to add food to fridge' })
          }
        }}
        onNavClose={() => {
          setNavOpen(false)
        }}
        navOpen={navOpen}
        onStatusClose={() => {
          setStatus({ open: false, message: '' })
        }}
        statusMessage={status.message}
        statusOpen={status.open}
      >
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              style={{ marginRight: '16px' }}
              onClick={() => {
                setNavOpen(true)
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
        </AppBar>
        <Typography>TODO: Insert instructions</Typography>
      </NavContainer>
    </div>
  )
}

export default HomePage
