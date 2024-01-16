import React from 'react'
import { Box, Stack } from '@chakra-ui/react';
import { Intro } from './components/Intro'
import { Portfolio} from './components/Portfolio'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <Stack spacing={0}>
      <Intro />
      <Portfolio />
    </Stack>
  )
}

export default App
