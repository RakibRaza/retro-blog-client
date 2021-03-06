import React from 'react'
import { AppBar, Box, Container, Button, Typography, makeStyles, Toolbar } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom";
import { Hidden } from '@material-ui/core';
import { useAuthContext } from '../../context/authContext';

const useStyles = makeStyles(theme => ({
  appbar: {
    background: 'none',
    boxShadow: 'none'
  },
  title: {
    color: '#111111',
    fontWeight: 'bold',
    flexGrow: '1'
  },
  menu: {
    '& a': {
      margin: theme.spacing(0, 4),
      textDecoration: 'none',
      color: '#333',
    }
  }
}))

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()
  const { currentUser, logout, user, setUser } = useAuthContext()
  const handleLogout = async () => {
    await logout()
    setUser({})
    history.replace('/')
  }

  return (
    <AppBar className={classes.appbar} position='static'>
      <Container>
        <Toolbar>
          <Typography className={classes.title} variant='h4'>Retro Blog</Typography>
          <Hidden smDown>
            <Box className={classes.menu}>
              <Link to='/'>Home</Link>
              <Link to='/'>Blog</Link>
              <Link to='/'>About</Link>
              <Link to='/'>Contact</Link>
              {user?.role === 'admin' && <Link to='/dashboard'>Dashboard</Link>}
              {currentUser ? <Button onClick={handleLogout}>Logout</Button> : <Button component={Link} to='/login'>Login</Button>}
            </Box>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
