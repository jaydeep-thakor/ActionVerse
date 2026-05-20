import React from 'react'
import Home from './pages/Home'
import Header from './components/layout/Header'
import { AuthModalProvider } from './context/AuthModalContext'

const App = () => {
  return (
    <AuthModalProvider>
      <Header/>
      <Home/>     
    </AuthModalProvider>
  )
}

export default App