import { Typography } from '@material-ui/core'
import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Blog = ({ _id, index, title, content, coverImg }) => {
  const history = useHistory()
  const bgColor = index % 2 === 0 ? '#4A42EC' : '#FF4274'
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box style={{ cursor: 'pointer' }} onClick={() => history.push(`/blog/${_id}`)}>
        <img style={{ display: 'block', width: '100%', borderRadius: '20px 20px 0 0' }} src={coverImg} alt={title} />
        <Box p={4} style={{ background: bgColor, color: '#fff', borderRadius: '0 0 20px 20px' }}>
          <Typography gutterBottom variant='h5'>{title}</Typography>
          <Typography gutterBottom>Cox's Bazar / March 09, 2021</Typography>
          <Typography>{`${content.slice(0, 120)}.....`}</Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default Blog