import React from 'react'

import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

/**
 * @typedef {object} FoodCardProps
 * @property {string} name
 * @property {Date} date Expiration Date
 * @property {string} location
 */

/**
 * @param {FoodCardProps} param0
 */
function FoodCard ({ name, date, location }) {
  return (
    <div style={{ boxSizing: 'border-box', padding: '1em', marginTop: '-1em' }}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body1' color='textSecondary' component='p'>
            Expires:{' '}
            {date.toLocaleString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Location: {location}
          </Typography>
        </CardContent>
        <CardActions>
          {/** TODO: To the right? */}
          <Button size='small' color='primary'>
            Edit
          </Button>
          <Button size='small' color='primary'>
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

FoodCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired
}

export default FoodCard
