import React from 'react'
import { Box, Button, Grid, makeStyles } from '@material-ui/core'
import headerImg from '../../images/header-img.jpg'
import { Typography } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
    padding: theme.spacing(5, 0)
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} justify='center' spacing={4} container alignItems='center'>
      <Grid item xs={12} md={6}>
        <Box>
          <img style={{ width: '100%', display: 'block', borderRadius: '20px', boxShadow: '0 12px 58px 0 rgb(0 31 52 / 35%)' }} src={headerImg} alt="" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box maxWidth={450}>
          <Typography gutterBottom style={{ fontWeight: 'bold' }} variant='h3'>Etiam nec enim id mi maximus consequat sed ut tortor.</Typography>
        </Box>
        <Typography>Cox's Bazar / March 09, 2021</Typography>
        <Box mt={3}>
          <Button color='primary' variant='contained'>Keep reading...</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header
