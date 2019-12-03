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
 * @property {boolean} open
 */

/**
 * @param {NavigationDrawerProps} param0
 */
function NavigationDrawer ({ authenticated, login, logout, open, onClose }) {
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
            [
              <ListItem button key={0} component={Link} to='/fridge'>
                <ListItemText primary='View Fridge' />
              </ListItem>,
              <ListItem button key={1} component={Link} to='/add_food'>
                <ListItemText primary='Add Food' />
              </ListItem>,
              <ListItem button key={2} onClick={() => logout()}>
                <ListItemText primary='Logout' />
              </ListItem>
            ]
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
  open: PropTypes.bool.isRequired
}

export default NavigationDrawer
