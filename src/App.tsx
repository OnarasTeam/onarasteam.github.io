import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const [count, setCount] = useState(0)
  const [t, i18n] = useTranslation()

  return (
    <div id='main-container'>
      <div className='main-info-card'>
        <h1>ONARA WEB</h1>
        <p>Esto se supone que es una descripción</p>
      </div>
    </div>
  )
}

export default App
