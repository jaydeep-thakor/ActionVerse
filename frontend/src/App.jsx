import React from 'react'
import Home from './pages/Home'
import Header from './components/layout/Header'
import AuthModal from './components/layout/AuthModal'
import { AuthModalProvider } from './context/AuthModalContext'

const App = () => {
  return (
    <AuthModalProvider>
      <Header/>
      <Home/>   
      <AuthModal/>  
    </AuthModalProvider>
  )
}

export default App