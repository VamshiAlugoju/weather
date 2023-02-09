 import React from 'react'
import './App.css'
import Weather from './components/Weather.jsx'
import { BackdropProvider } from 'use-backdrop'

function App() {

  return (
    <BackdropProvider>
    <div className="App">
   
      <Weather />
    </div>
    </BackdropProvider>
  )
}

export default App
