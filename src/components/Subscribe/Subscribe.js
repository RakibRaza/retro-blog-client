import { Grid, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Container, Paper, Box } from '@material-ui/core'
import React from 'react'

const Subscribe = () => {
  return (
    <Container maxWidth='md'>
      <Box zIndex='tooltip' boxShadow={20} style={{
        position: 'relative', boxShadow: '0 1rem 3rem rgb(0 0 0 / 18%)'
      }} borderRadius={20} p={6} component={Paper}>
        <Grid container alignItems='center' justify='center' spacing={4}>
          <Grid item md={3}>
            <Typography variant='h4'>Subscribe to our Newsletter</Typography>
          </Grid>
          <Grid item md={7}>
            <TextField variant='outlined' fullWidth />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Subscribe
