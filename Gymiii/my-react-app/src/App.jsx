import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HashRouter from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </HashRouter>
   
  )
}

export default App
