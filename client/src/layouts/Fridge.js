import React, { useState, useEffect, useMemo } from 'react'

import { Redirect } from 'react-router-dom'

import { FoodCard, SearchBar, FoodDialog } from '../components/molecules'
import { NavContainer } from '../components/organisms'

import { useAuth0 } from '../utils/auth0'
import { useFoodApi } from '../utils/api'

import './Fridge.css'

/**
 * @typedef {object} Food
 * @property {string} name
 * @property {Date} date Expiration Date
 * @property {string} location
 * @property {string} _id
 */

function Fridge () {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()

  const {
    post: addFood,
    get: getFoods,
    delete: deleteFood,
    put: updateFood
  } = useFoodApi()

  const [foods, setFoods] = useState(/** @type {Food[]} */ ([]))
  const [update, setUpdate] = useState(0)

  const [search, setSearch] = useState('')
  const [navOpen, setNavOpen] = useState(false)
  const [status, setStatus] = useState({ open: false, message: '' })

  const [editDialog, setEditDialog] = useState({
    open: false,
    name: '',
    date: new Date(),
    location: '',
    id: ''
  })

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        if (isAuthenticated) {
          /** @type {Food[]} */
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

  const foodCards = useMemo(
    () =>
      foods
        .filter(
          f =>
            f.name.toLowerCase().includes(search.toLowerCase()) ||
            f.location.toLowerCase().includes(search.toLowerCase())
        )
        .map(f => (
          <FoodCard
            key={f._id}
            name={f.name}
            location={f.location}
            date={f.date}
            onEdit={() => {
              setEditDialog({
                date: f.date,
                location: f.location,
                name: f.name,
                open: true,
                id: f._id
              })
            }}
            onDelete={async () => {
              try {
                await deleteFood(f._id)
                setStatus({ open: true, message: 'Food removed from fridge' })
                setUpdate(n => n + 1)
              } catch (e) {
                setStatus({
                  open: true,
                  message: 'Failed to remove food from fridge'
                })
              }
            }}
          />
        )),
    [deleteFood, foods, search]
  )

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
          onSearchChange={newSearch => setSearch(newSearch)}
          onNavOpen={() => {
            setNavOpen(true)
          }}
          search={search}
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
          {foodCards}
        </div>
        <FoodDialog
          actionTitle='Edit Food'
          actionName='Update'
          initialDate={editDialog.date}
          initialLocation={editDialog.location}
          initialName={editDialog.name}
          open={editDialog.open}
          onClose={() => setEditDialog(s => ({ ...s, open: false }))}
          onSubmit={async (name, date, location) => {
            try {
              await updateFood({ name, date, location, id: editDialog.id })
              setStatus({ open: true, message: 'Food updated' })
              setUpdate(n => n + 1)
            } catch (e) {
              setStatus({ open: true, message: 'Failed to update food' })
            } finally {
              setEditDialog(s => ({ ...s, open: false }))
            }
          }}
        />
      </NavContainer>
    </div>
  )
}

export default Fridge
