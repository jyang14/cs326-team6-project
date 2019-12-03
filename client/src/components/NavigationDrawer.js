import React from 'react'

import PropTypes from 'prop-types'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

/**
 * @typedef {object} NavigationDrawerProps
 * @property {boolean} open
 * @property {() => void} onClose
 */

/**
 * @param {NavigationDrawerProps} param0
 */
function NavigationDrawer ({ open, onClose }) {
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
          <ListItem button>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem button>
            <ListItemText primary='Add Food' />
          </ListItem>
          <ListItem button>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

NavigationDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default NavigationDrawer
