import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import LoginScreen from './components/Login'
import AuthProvider from './lib/AuthProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <LoginScreen/>
      <AdminDashboard/>
    </AuthProvider>
  )
}

export default App
