import React from 'react'

import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

function FoodCard () {
  return (
    <Paper component='form'>
      <IconButton aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <InputBase
        placeholder='Search for food'
        inputProps={{ 'aria-label': 'search for food' }}
      />
      <IconButton type='submit' aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default FoodCard
