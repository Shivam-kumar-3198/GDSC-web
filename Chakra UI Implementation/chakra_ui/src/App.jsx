import React from 'react'
import navbar from './components/navbar.jsx'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <>
     <ChakraProvider>
   <div>{navbar}</div>

    <h1>Hey there how are you</h1>
  
   
   </ChakraProvider>
    </>
    
  )
}

export default App