import React, { useState } from 'react'
import { FoodDialog, NavigationDrawer } from '../molecules'

import PropTypes from 'prop-types'
import StatusAlert from '../molecules/StatusAlert'

/**
 * @typedef {object} NavContainerProps
 * @property {boolean} authenticated
 * @property {React.ReactNode} children
 * @property {() => void} login
 * @property {() => void} logout
 * @property {boolean} navOpen
 * @property {(food: { name: string, date: Date, location: string }) => void} onAddFood
 * @property {() => void} onNavClose
 * @property {() => void} onStatusClose
 * @property {string} statusMessage
 * @property {boolean} statusOpen
 */

/**
 * @param {NavContainerProps} param0
 */
function NavContainer ({
  authenticated,
  children,
  login,
  logout,
  navOpen,
  onAddFood,
  onNavClose,
  onStatusClose,
  statusMessage,
  statusOpen
}) {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      {children}
      <FoodDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={async (name, date, location) => {
          onAddFood({ name, date, location })
          setDialogOpen(false)
        }}
      />
      <NavigationDrawer
        open={navOpen}
        onClose={onNavClose}
        authenticated={authenticated}
        onAddFood={() => {
          onNavClose()
          setDialogOpen(true)
        }}
        login={login}
        logout={logout}
      />
      <StatusAlert
        message={statusMessage}
        open={statusOpen}
        onClose={onStatusClose}
      />
    </>
  )
}

NavContainer.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  navOpen: PropTypes.bool.isRequired,
  onAddFood: PropTypes.func.isRequired,
  onNavClose: PropTypes.func.isRequired,
  onStatusClose: PropTypes.func.isRequired,
  statusMessage: PropTypes.string.isRequired,
  statusOpen: PropTypes.bool.isRequired
}

export default NavContainer
