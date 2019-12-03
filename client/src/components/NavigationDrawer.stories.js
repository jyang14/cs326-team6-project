import React, { useState } from 'react'

import { withActions, action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { MemoryRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'

import NavigationDrawer from './NavigationDrawer'

export default {
  title: 'NavigationDrawer',
  decorators: [withKnobs, withActions]
}

export const defaultView = () =>
  React.createElement(() => {
    const [open, setOpen] = useState(false)

    return (
      <MemoryRouter>
        <div>
          <Button
            onClick={() => {
              setOpen(true)
            }}
          >
            Show Drawer
          </Button>
          <NavigationDrawer
            authenticated={boolean('Authenticated', false)}
            open={open}
            onClose={() => {
              setOpen(false)
            }}
            login={() => {
              action('login')
            }}
            logout={() => {
              action('logout')
            }}
          />
        </div>
      </MemoryRouter>
    )
  })
