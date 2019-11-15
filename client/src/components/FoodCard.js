import React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

function FoodCard () {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          FOOD_NAME
        </Typography>
        <Typography variant='body1' color='textSecondary' component='p'>
          Expires: EXPIRATION DATE
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          LOCATION
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          Edit
        </Button>
        <Button size='small' color='primary'>
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}

export default FoodCard
