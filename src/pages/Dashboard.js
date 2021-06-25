import { Container, Grid, Box, Avatar, Typography, Paper, TextField, Button, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../context/authContext'
import BackupIcon from "@material-ui/icons/Backup";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  imgInput: {
    display: "none",
  },
  imgBtn: {
    border: "2px solid #F63E7B",
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1.2, 4),
    background: "#FFEAF3",
    color: "#F63E7B",
    borderRadius: theme.spacing(1),
    "&:hover": {
      background: "#FFEAF3",
    },
  },
}));
const Dashboard = () => {
  const classes = useStyles()
  const { currentUser, user } = useAuthContext()
  const { register, handleSubmit, reset } = useForm()
  const [blogs, setBlogs] = useState([])
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(true)

  const handleFileUpload = async (e) => {
    const imageData = new FormData();
    imageData.set("key", "f3b82a821ec5aaf73bfb1b9a1e2b1a56");
    imageData.append("image", e.target.files[0]);

    try {
      const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
      const image = res.data.data.url;
      setFile(image);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://pwr-retro-blog-server.herokuapp.com/addBlog",
        {
          ...data,
          coverImg: file,
        }
      );
      if (res.data) {
        setLoading(true);
        reset();
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  const fetchBlogs = async () => {
    const res = await axios.get(`https://pwr-retro-blog-server.herokuapp.com/blogs`)
    setBlogs(res.data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <Container>
      {/* Profile card */}
      <Grid container spacing={4} alignItems='center'>
        <Grid item xs={12} sm={6} md={5}>
          <Box component={Paper} p={5} align="center">
            <Avatar
              alt={user?.name}
              src={currentUser?.photoURL}
            />
            <Typography variant="h4">
              {user?.name}
            </Typography>
            <Typography variant="h6">{user?.role}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={7}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('title', { required: true })} margin='normal' label='Title' fullWidth variant='outlined' />
            <TextField {...register('content', { required: true })} multiline rows={4} margin='normal' label='Content' fullWidth variant='outlined' />
            <input
              className={classes.imgInput}
              onChange={handleFileUpload}
              type="file"
              id="image"
            />
            <Button
              className={classes.imgBtn}
              startIcon={<BackupIcon />}
              component="label"
              htmlFor="image"
            >
              Upload Image
            </Button>
            <Box my={3}>
              <Button disabled={loading}
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>

      <Grid container>
        {blogs.map((blog) => (
          <Grid key={blog._id} item xs={12} sm={6} md={4}>
            <Box p={3}>
              <Typography variant="h5" align="center">
                {blog.title}
              </Typography>
              <Box align='center' mt={2}>
                <Button>Delete</Button>
              </Box>
            </Box>
          </Grid>
        ))
        }
      </Grid>
    </Container>
  )
}

export default Dashboard
