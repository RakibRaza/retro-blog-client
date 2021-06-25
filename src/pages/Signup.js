import React from 'react'
import { makeStyles, Container, Box, Paper, Button, Typography, TextField } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../context/authContext';
import axios from 'axios'

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
const Signup = () => {
  const classes = useStyles()
  const { register, handleSubmit } = useForm()
  const { signup } = useAuthContext()
  const history = useHistory()
  const onSubmit = async (data) => {
    try {
      await axios.post('https://pwr-retro-blog-server.herokuapp.com/addUser', { name: data.name, email: data.email, password: data.password, role: 'visitor' })
      await signup(data.email, data.password)
      history.replace('/')
    } catch (error) {
      alert('Signup error please try again')
    }

  }
  return (
    <div className={classes.root}>
      <Container maxWidth='sm'>
        <Paper component={Box} p={3}>
          <Typography gutterBottom variant='h4'>Create an account</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('name', { required: true })} label='Name' margin='normal' fullWidth />
            <TextField {...register('email', { required: true })} label='Email' margin='normal' fullWidth />
            <TextField {...register('password', { required: true })} type='password' label='Password' margin='normal' fullWidth />
            <Box my={3}>
              <Button type='submit' variant='contained' fullWidth>Create an account</Button>
            </Box>
            <Typography align='center'>Already have an account ? <Link to='/login'>Login</Link></Typography>
          </form>
        </Paper>
      </Container>
    </div>
  )
}

export default Signup
