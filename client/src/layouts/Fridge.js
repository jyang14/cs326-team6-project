import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { FoodCard, NavigationDrawer, SearchBar } from '../components'
import { useAuth0 } from '../utils/auth0'

import './Fridge.css'

function Fridge () {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()

  const [food, setFood] = useState(
    /** @type {import('../components/FoodCard').FoodCardProps[]} */ ([])
  )

  const [open, setOpen] = useState(false)

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
      <NavigationDrawer
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        authenticated={isAuthenticated}
        login={() => {
          loginWithPopup()
        }}
        logout={() => {
          logout()
        }}
      />
      <SearchBar
        onNavOpen={() => {
          setOpen(true)
        }}
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
