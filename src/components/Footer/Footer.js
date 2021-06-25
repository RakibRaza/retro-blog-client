import React from 'react'
import { Container, Grid, Typography, Divider, Box, makeStyles } from '@material-ui/core'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  icon: {
    '& > *': {
      margin: theme.spacing(0, 1),
      fontSize: '24px'
    }
  }
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <div style={{ background: '#4A42EC', color: '#fff', paddingBottom: '30px' }} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 320"><path fill="#fff" fillOpacity="1" d="M0,32L60,64C120,96,240,160,360,192C480,224,600,224,720,202.7C840,181,960,139,1080,149.3C1200,160,1320,224,1380,256L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Typography variant='h4'>Retro Blog</Typography>
            <Box maxWidth='390px'>
              <Typography>Phasellus deserunt. Convallis perspiciatis fusce fermentum accumsan, arcu aliquam, velit venenatis augue proin, enim etiam dolor. Mi ac lectus vitae cum, fusce purus posuere.</Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Typography variant='h5'>About</Typography>
            <Typography>Home</Typography>
            <Typography>Lifestyle</Typography>
            <Typography>People</Typography>
            <Typography>Slider</Typography>
            <Typography>Sport</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant='h5'>Categories</Typography>
            <Typography>Business</Typography>
            <Typography>Design</Typography>
            <Typography>Lifestyle</Typography>
            <Typography>Technology</Typography>
            <Typography>Training</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant='h5'>Account</Typography>
            <Typography>Business</Typography>
            <Typography>Design</Typography>
            <Typography>Entertainment</Typography>
            <Typography>Featured</Typography>
            <Typography>Tecnology</Typography>
          </Grid>
        </Grid>
        <Divider style={{ backgroundColor: '#fff', margin: '20px 0' }} />
        <Grid container spacing={4} alignItems='center' justify='space-between'>
          <Grid item>
            <Typography>@ {new Date().getFullYear()} Retro Blog | All Rights Reserved</Typography>
          </Grid>
          <Grid item>
            <Box className={classes.icon}>
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaInstagramSquare />
              <FaLinkedin />
              <FaYoutubeSquare />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
