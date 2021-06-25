import { Container } from '@material-ui/core'
import React from 'react'
import Blogs from '../components/Blogs/Blogs'
import Header from '../components/Header/Header'
import Subscribe from '../components/Subscribe/Subscribe'

const Home = () => {
  return (
    <Container>
      <Header />
      <Blogs />
      <Subscribe />
    </Container>
  )
}

export default Home
