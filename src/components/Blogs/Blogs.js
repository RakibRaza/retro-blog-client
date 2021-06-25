import { Grid, Box } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Blog from './Blog'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])


  const fetchBlogs = async () => {
    const res = await axios.get(`https://pwr-retro-blog-server.herokuapp.com/blogs`)
    setBlogs(res.data)
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <Box py={10}>
      <Grid container spacing={4}>
        {blogs.map((blog, index) => <Blog index={index} key={blog.id} {...blog} />)}
      </Grid>
    </Box>
  )
}

export default Blogs
