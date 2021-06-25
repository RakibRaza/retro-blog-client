import { Typography } from '@material-ui/core'
import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Blog = ({ id, title, content, coverImg }) => {
  const history = useHistory()
  return (
    <Grid item md={4}>
      <Box style={{ cursor: 'pointer' }} onClick={() => history.push(`/blog/${id}`)}>
        <img style={{ display: 'block', width: '100%', borderRadius: '20px 20px 0 0' }} src={coverImg} alt={title} />
        <Box p={4} style={{ background: '#4A42EC', color: '#fff', borderRadius: '0 0 20px 20px' }}>
          <Typography gutterBottom variant='h5'>{title}</Typography>
          <Typography gutterBottom>Cox's Bazar / March 09, 2021</Typography>
          <Typography>{`${content.slice(0, 120)}.....`}</Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default Blog