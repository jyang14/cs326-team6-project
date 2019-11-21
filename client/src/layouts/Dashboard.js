import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { FoodCard, SearchBar } from '../components'

import './Dashboard.css'

function Dashboard () {
  const [state, setState] = useState({
    food: /** @type {import('../components/FoodCard').FoodCardProps[]} */ ([])
  })

  const { food } = state

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const response = await axios.get('/api/sample-data')
      if (mounted) {
        setState(state => ({
          ...state,
          food: response.data.map(f => ({
            ...f,
            date: new Date(f.date)
          }))
        }))
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className='Dashboard'>
      <SearchBar />
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
