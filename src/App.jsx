import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContextProvider from './ContextProvider'
import Component2 from './Componetnts/Component2'

function App({isLight}) {

  return (
    <ContextProvider>
      <Component2/>
    </ContextProvider>
  )
}

export default App
