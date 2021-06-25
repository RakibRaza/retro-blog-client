import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import { BsChatFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import data from "../data/blogs";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 64px)",
    padding: theme.spacing(5, 0)
  },
}));

const BlogDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    const res = await axios.get(`https://pwr-retro-blog-server.herokuapp.com/blog/${id}`)
    setBlog(res.data[0])
  }
  useEffect(() => {
    fetchBlog()
  }, [])
  return (
    <Container>
      <Grid className={classes.root} justify='center' spacing={4} container alignItems='center'>
        <Grid item xs={12} md={6}>
          <Box>
            <img style={{ width: '100%', display: 'block', borderRadius: '20px', boxShadow: '0 12px 58px 0 rgb(0 31 52 / 35%)' }} src={blog.coverImg} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box maxWidth={450}>
            <Typography gutterBottom style={{ fontWeight: 'bold' }} variant='h3'>{blog.title}</Typography>
          </Box>
          <Typography>Cox's Bazar / March 09, 2021</Typography>
        </Grid>
      </Grid>
      <Container maxWidth="md">
        <Typography>{blog.content}</Typography>
      </Container>
      <Container maxWidth="md" component={Box} my={10}>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <TextField label="Name" size="small" fullWidth variant="outlined" />
          </Grid>
          <Grid item md={4}>
            <TextField
              label="Email"
              size="small"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              label="Website"
              size="small"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              label="Message"
              size="small"
              rows={6}
              multiline
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button startIcon={<BsChatFill />} color='primary' variant="contained">
            Post a Comment
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default BlogDetails;
