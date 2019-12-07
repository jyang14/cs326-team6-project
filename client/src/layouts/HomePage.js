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
          } finally {
            setStatus({ open: false, message: '' })
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
        <div className="photoBlock">
          <img height="100%" draggable="false" src="/fridge.png"></img>
        </div>
          <div className="fas fa-cheese"></div>
          <div className="fas fa-apple-alt"></div>
          <div className="fas fa-carrot"></div>
          <div className="fas fa-hamburger"></div>
          <div className="fas fa-pizza-slice"></div>
          <div className="fas fa-fish"></div>
          <div className="fas fa-hotdog"></div>
          <div className="far fa-lemon"></div>
          <div className="fas fa-candy-cane"></div>
          <div className="fas fa-ice-cream"></div>
        <div className="text">Manage your refrigerator easily</div>
        <div className="button" onClick={() => alert('login or add/edit')}></div>
        <Typography></Typography>
      </NavContainer>
    </div>
  )
}

export default HomePage
