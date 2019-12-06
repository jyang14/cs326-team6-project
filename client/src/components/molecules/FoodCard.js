import React from 'react'

import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import WarningIcon from '@material-ui/icons/Warning'

/**
 * @typedef {object} FoodCardProps
 * @property {string} name
 * @property {Date} date Expiration Date
 * @property {string} location
 * @property {() => void} onDelete
 * @property {() => void} onEdit
 */

/**
 * @param {FoodCardProps} param0
 */
function FoodCard ({ name, date, location, onDelete, onEdit }) {
  const now = Date.now()
  return (
    <div style={{ boxSizing: 'border-box', padding: '1em', marginTop: '-1em' }}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            <>
              {now - date.getTime() > -7 * 24 * 60 * 60 * 1000 && (
                <WarningIcon
                  style={{ color: now - date.getTime() > 0 ? 'red' : 'orange' }}
                />
              )}{' '}
              {name}{' '}
              {now - date.getTime() > -7 * 24 * 60 * 60 * 1000 && (
                <WarningIcon
                  style={{ color: now - date.getTime() > 0 ? 'red' : 'orange' }}
                />
              )}
            </>
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
          <Button
            size='small'
            color='primary'
            onClick={() => {
              onEdit()
            }}
          >
            Edit
          </Button>
          <Button
            size='small'
            color='primary'
            onClick={() => {
              onDelete()
            }}
          >
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
  location: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default FoodCard
