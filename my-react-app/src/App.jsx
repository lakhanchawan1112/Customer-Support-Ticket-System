import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomerService from './assets/CustomerService'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CustomerService /> 
    </>
  )
}

export default App
