import React from 'react'

import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

import CloseIcon from '@material-ui/icons/Close'

/**
 * @typedef {object} StatusAlertProps
 * @property {string} message
 * @property {boolean} open
 * @property {() => void} onClose
 */

/**
 * @param {StatusAlertProps} param0
 */
function StatusAlert ({ message, open, onClose }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      ContentProps={{
        'aria-describedby': 'status-alert-msg'
      }}
      message={<span id='status-alert-msg'>{message}</span>}
      action={
        <IconButton
          key='close'
          aria-label='close'
          color='inherit'
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  )
}

StatusAlert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default StatusAlert
