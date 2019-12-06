import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom'

import { FoodCard, SearchBar } from '../components/molecules'
import { NavContainer } from '../components/organisms'

import { useAuth0 } from '../utils/auth0'
import { useFoodApi } from '../utils/api'

import './Fridge.css'

function Fridge () {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()

  const { post: addFood, get: getFoods } = useFoodApi()

  const [foods, setFoods] = useState(
    /** @type {import('../components/molecules/FoodCard').FoodCardProps[]} */ ([])
  )
  const [update, setUpdate] = useState(0)

  const [navOpen, setNavOpen] = useState(false)
  const [status, setStatus] = useState({ open: false, message: '' })

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        if (isAuthenticated) {
          /** @type {import('../components/molecules/FoodCard').FoodCardProps[]} */
          const newFoods = await getFoods()
          if (mounted) {
            setFoods(
              newFoods.map(f => ({
                ...f,
                date: new Date(f.date)
              }))
            )
          }
        }
      } catch (e) {
        console.error(e)
      }
    })()
    return () => {
      mounted = false
    }
  }, [update, isAuthenticated, getFoods])

  if (!isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div className='Fridge'>
      <NavContainer
        authenticated={isAuthenticated}
        login={() => {
          loginWithPopup()
        }}
        logout={() => {
          logout()
        }}
        onAddFood={async food => {
          try {
            await addFood(food)
            setStatus({ open: true, message: 'Food added to fridge' })
            setUpdate(n => n + 1)
          } catch (e) {
            setStatus({ open: true, message: 'Failed to add food to fridge' })
          }
        }}
        onNavClose={() => {
          setNavOpen(false)
        }}
        navOpen={navOpen}
        onStatusClose={() => {
          setStatus({ open: false, message: '' })
        }}
        statusMessage={status.message}
        statusOpen={status.open}
      >
        <SearchBar
          onNavOpen={() => {
            setNavOpen(true)
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
          {foods.map((f, idx) => (
            <FoodCard key={idx} {...f} />
          ))}
        </div>
      </NavContainer>
    </div>
  )
}

export default Fridge
