import React from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

/**
 * @typedef {object} NavigationDrawerProps
 * @property {boolean} authenticated
 * @property {() => void} login
 * @property {() => void} logout
 * @property {() => void} onClose
 * @property {() => void} onAddFood
 * @property {boolean} open
 */

/**
 * @param {NavigationDrawerProps} param0
 */
function NavigationDrawer ({
  authenticated,
  login,
  logout,
  open,
  onAddFood,
  onClose
}) {
  return (
    <Drawer
      open={open}
      onClose={() => {
        onClose()
      }}
    >
      <div
        role='presentation'
        style={{
          width: '250px'
        }}
      >
        <List>
          <ListItem button component={Link} to='/'>
            <ListItemText primary='Home' />
          </ListItem>
          {authenticated ? (
            <>
              <ListItem button component={Link} to='/fridge'>
                <ListItemText primary='View Fridge' />
              </ListItem>
              <ListItem button onClick={() => onAddFood()}>
                <ListItemText primary='Add Food' />
              </ListItem>
              <ListItem button onClick={() => logout()}>
                <ListItemText primary='Logout' />
              </ListItem>
            </>
          ) : (
            <ListItem button onClick={() => login()}>
              <ListItemText primary='Login' />
            </ListItem>
          )}
        </List>
      </div>
    </Drawer>
  )
}

NavigationDrawer.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddFood: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default NavigationDrawer
