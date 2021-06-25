import { makeStyles, Container, Box, Paper, Button, Typography, TextField } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center'
  }
}))
const Login = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth='sm'>
        <Paper component={Box} p={3}>
          <Typography gutterBottom variant='h4'>Login</Typography>
          <form>
            <TextField label='Email' margin='normal' fullWidth />
            <TextField label='Password' margin='normal' fullWidth />
            <Box mt={3}>
              <Button variant='contained' fullWidth>Login</Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  )
}

export default Login
