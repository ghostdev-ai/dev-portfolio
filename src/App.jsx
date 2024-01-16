import React from 'react'
import { Box, Stack } from '@chakra-ui/react';
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import { Portfolio } from './components/Portfolio'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <Stack spacing={0}>
      <Navbar />
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </Stack>
  )
}

export default App
