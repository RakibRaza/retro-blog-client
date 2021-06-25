import { Grid, makeStyles, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Container, Paper, Box, Button } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  input: {
    '& .MuiInputBase-root': {
      borderRadius: '30px'
    }
  }
})

const Subscribe = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='md'>
      <Box zIndex='tooltip' boxShadow={20} style={{
        position: 'relative', boxShadow: '0 1rem 3rem rgb(0 0 0 / 18%)'
      }} borderRadius={20} p={6} component={Paper}>
        <Grid container alignItems='center' justify='center' spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography style={{ fontWeight: 'bold' }} variant='h4'>Subscribe to our Newsletter</Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box className={classes.input} style={{ position: 'relative' }}>
              <TextField style={{ borderRadius: '20px' }} placeholder='Enter your Email.' variant='outlined' fullWidth />
              <Button style={{ position: 'absolute', right: '7px', top: '3px', boxShadow: '0px' }} color='primary' variant='contained'>Subscribe</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Subscribe
