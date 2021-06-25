import { Grid, Box } from '@material-ui/core'
import React from 'react'
import data from '../../data/blogs'
import Blog from './Blog'

const Blogs = () => {
  return (
    <Box py={10}>
      <Grid container spacing={4}>
        {data.map(blog => <Blog key={blog.id} {...blog} />)}
      </Grid>
    </Box>
  )
}

export default Blogs
