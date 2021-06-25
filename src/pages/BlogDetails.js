import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 64px)",
  },
}));

const BlogDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [blog, setBlog] = useState(
    data.find((item) => item.id === parseInt(id))
  );
  return (
    <Container>
      <Grid
        className={classes.root}
        justify="center"
        spacing={4}
        container
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{
                width: "100%",
                display: "block",
                borderRadius: "20px",
                boxShadow: "0 12px 58px 0 rgb(0 31 52 / 35%)",
              }}
              src={blog.coverImg}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">{blog.title}</Typography>
          <Typography>Cox's Bazar / March 09, 2021</Typography>
          <Button variant="contained">Keep reading...</Button>
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
          <Button startIcon={<BsChatFill />} variant="contained">
            Post Comment
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default BlogDetails;
