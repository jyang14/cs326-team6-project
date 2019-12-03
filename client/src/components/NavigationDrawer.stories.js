import React, { useState } from 'react'

import Button from '@material-ui/core/Button'

import NavigationDrawer from './NavigationDrawer'

export default { title: 'NavigationDrawer' }

export const defaultView = () =>
  React.createElement(() => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <Button
          onClick={() => {
            setOpen(true)
          }}
        >
          Show Drawer
        </Button>
        <NavigationDrawer
          open={open}
          onClose={() => {
            setOpen(false)
          }}
        />
      </div>
    )
  })
