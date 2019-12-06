import { useMemo } from 'react'

import axios from 'axios'

import { useAuth0 } from './auth0'

export function useFoodApi () {
  const { getTokenSilently } = useAuth0()

  return useMemo(
    () => ({
      /**
       * @param {{ date: Date; name: string; location: string}} param0
       */
      async post ({ date, name, location }) {
        const token = await getTokenSilently()

        await axios.post(
          '/api/food',
          { date, name, location },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
      },
      async get () {
        try {
          const token = await getTokenSilently()

          return (
            await axios.get('/api/food', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
          ).data
        } catch (error) {
          console.error(error)
          return []
        }
      }
    }),
    [getTokenSilently]
  )
}
