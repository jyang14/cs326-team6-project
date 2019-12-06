import React, { useState } from 'react'

import { action, withActions } from '@storybook/addon-actions'

import Button from '@material-ui/core/Button'

import FoodDialog from './FoodDialog'

export default { title: 'AddFoodDialog', decorators: [withActions] }

export const defaultView = () => {
  function DefaultView () {
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
        <FoodDialog
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={action('submit')}
        />
      </div>
    )
  }
  return <DefaultView />
}
