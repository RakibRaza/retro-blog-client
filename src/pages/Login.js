import React from 'react'
import { makeStyles, Container, Box, Paper, Button, Typography, TextField } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../context/authContext';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    '& .MuiPaper-root': {
      boxShadow: '0 1rem 3rem rgb(0 0 0 / 18%)',
      borderRadius: '10px'
    }
  }
}))
const Login = () => {
  const classes = useStyles()
  const { register, handleSubmit } = useForm()
  const { login } = useAuthContext()
  const history = useHistory()
  const onSubmit = async (data) => {
    await login(data.email, data.password)
    history.replace('/')
  }
  return (
    <div className={classes.root}>
      <Container maxWidth='sm'>
        <Paper component={Box} p={3}>
          <Typography gutterBottom variant='h4'>Login</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('email', { required: true })} label='Email' margin='normal' fullWidth />
            <TextField type='password' {...register('password', { required: true })} label='Password' margin='normal' fullWidth />
            <Box my={3}>
              <Button type='submit' variant='contained' fullWidth>Login</Button>
            </Box>
            <Typography align='center'>Don't have an account ? <Link to='/signup'>Create an account</Link></Typography>
          </form>
        </Paper>
      </Container>
    </div>
  )
}

export default Login
