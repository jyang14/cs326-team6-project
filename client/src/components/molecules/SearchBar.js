import React from 'react'

import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'

import MenuIcon from '@material-ui/icons/Menu'

/**
 * @typedef {object} SearchBarProps
 * @property {() => void} onNavOpen
 * @property {string} search
 * @property {(x: string) => void} onSearchChange
 */

/**
 * @param {SearchBarProps} param0
 */
function SearchBar ({ onNavOpen, search, onSearchChange }) {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        padding: '1em'
      }}
    >
      <Paper
        component='form'
        style={{
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <IconButton
          aria-label='menu'
          onClick={() => {
            onNavOpen()
          }}
        >
          <MenuIcon />
        </IconButton>
        <InputBase
          placeholder='Search for food'
          inputProps={{ 'aria-label': 'search for food' }}
          style={{
            flex: 1
          }}
          value={search}
          onChange={e => onSearchChange(e.currentTarget.value)}
        />
      </Paper>
    </div>
  )
}

SearchBar.propTypes = {
  onNavOpen: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
}

export default SearchBar
