import React from 'react'

import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

function FoodCard () {
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
        <IconButton aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <InputBase
          placeholder='Search for food'
          inputProps={{ 'aria-label': 'search for food' }}
          style={{
            flex: 1
          }}
        />
        <IconButton aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

export default FoodCard
