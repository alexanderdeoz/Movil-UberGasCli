import React from 'react'
import AppNavigation from './app/navigation/AppNavigation'
import { UsuarioProvider } from './app/context/UsuarioContext'

function App(){
  return (
    <UsuarioProvider>
      <AppNavigation/>
    </UsuarioProvider>
  )
}

export default App
