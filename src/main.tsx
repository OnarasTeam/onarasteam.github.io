import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import { HashRouter } from 'react-router-dom'
import App from './App'

console.log(import.meta.env.BASE_URL)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename={import.meta.env.BASE_URL || '/'}>
      <App />
    </HashRouter>
  </StrictMode>
)
