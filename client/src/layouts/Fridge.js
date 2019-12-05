import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom'
import axios from 'axios'

import {
  FoodCard,
  NavigationDrawer,
  SearchBar,
  AddFoodDialog
} from '../components'
import { useAuth0 } from '../utils/auth0'

import './Fridge.css'

function Fridge () {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()

  const [food, setFood] = useState(
    /** @type {import('../components/FoodCard').FoodCardProps[]} */ ([])
  )

  const [navOpen, setNavOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      if (isAuthenticated) {
        const response = await axios.get('/api/sample-data')
        if (mounted) {
          setFood(
            response.data.map(f => ({
              ...f,
              date: new Date(f.date)
            }))
          )
        }
      }
    })()
    return () => {
      mounted = false
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div className='Fridge'>
      <SearchBar
        onNavOpen={() => {
          setNavOpen(true)
        }}
      />
      <NavigationDrawer
        open={navOpen}
        onClose={() => {
          setNavOpen(false)
        }}
        authenticated={isAuthenticated}
        onAddFood={() => {
          setNavOpen(false)
          setDialogOpen(true)
        }}
        login={() => {
          loginWithPopup()
        }}
        logout={() => {
          logout()
        }}
      />
      <AddFoodDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={() => {}}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '0',
          flex: '1',
          overflowY: 'auto'
        }}
      >
        {food.map((f, idx) => (
          <FoodCard key={idx} {...f} />
        ))}
      </div>
    </div>
  )
}

export default Fridge
