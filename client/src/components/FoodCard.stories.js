import React from 'react'

import { withKnobs, text, date } from '@storybook/addon-knobs'

import FoodCard from './FoodCard'

export default { title: 'FoodCard', decorators: [withKnobs] }

export const defaultView = () => (
  <FoodCard
    name={text('Name', 'FOOD_NAME')}
    date={new Date(date('Expiration Date', new Date()))}
    location={text('Location', 'LOCATION')}
  />
)
