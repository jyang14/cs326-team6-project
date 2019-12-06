import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

import useTheme from '@material-ui/core/styles/useTheme'

/**
 * @typedef {object} AddFoodDialogProps
 * @property {() => void} onClose
 * @property {boolean} open
 * @property {(name: string, date: Date, location: string) => void} onSubmit
 */

/**
 * @param {AddFoodDialogProps} param0
 */
function AddFoodDialog ({ open, onClose, onSubmit }) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [name, setName] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [date, setDate] = React.useState(() => new Date(Date.now()))

  useEffect(() => {
    setDate(new Date(Date.now()))
  }, [open])

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby='food-dialog-title'
    >
      <DialogTitle id='food-dialog-title'>Add Food</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='Food Name'
          required
          fullWidth
          value={name}
          onChange={e => {
            setName(e.currentTarget.value)
          }}
        />
        <TextField
          margin='dense'
          label='Location'
          fullWidth
          value={location}
          onChange={e => {
            setLocation(e.currentTarget.value)
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant='inline'
            format='MM/dd/yyyy'
            margin='normal'
            label='Expiration Date'
            value={date}
            onChange={date => {
              setDate(date)
            }}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (name) {
              onClose()
              onSubmit(name, date, location)
            }
          }}
          color='primary'
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

AddFoodDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default AddFoodDialog
