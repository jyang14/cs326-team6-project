import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { FoodCard, NavigationDrawer, SearchBar } from '../components'

import './Dashboard.css'

function Dashboard () {
  const [food, setFood] = useState(
    /** @type {import('../components/FoodCard').FoodCardProps[]} */ ([])
  )

  const [open, setOpen] = useState(false)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const response = await axios.get('/api/sample-data')
      if (mounted) {
        setFood(
          response.data.map(f => ({
            ...f,
            date: new Date(f.date)
          }))
        )
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className='Dashboard'>
      <NavigationDrawer
        open={open}
        onClose={() => {
          setOpen(false)
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

export default Dashboard
