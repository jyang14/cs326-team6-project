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
import AddFoodDialog from '../components/AddFoodDialog'

function HomePage () {
  const {
    isAuthenticated,
    loginWithPopup,
    logout
    // getTokenSilently
  } = useAuth0()
  const [navOpen, setNavOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  // const callApi = async () => {
  //   try {
  //     const token = await getTokenSilently()

  //     axios.post(
  //       '/api/user_profile',
  //       { token },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       }
  //     )
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

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
      <AddFoodDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={() => {}}
      />
      <NavigationDrawer
        open={navOpen}
        onClose={() => {
          setNavOpen(false)
        }}
        authenticated={isAuthenticated}
        onAddFood={() => {
          setNavOpen(false)
          setDialogOpen(true)
        }}
        login={() => {
          loginWithPopup()
        }}
        logout={() => {
          logout()
        }}
      />
    </div>
  )
}

export default HomePage
