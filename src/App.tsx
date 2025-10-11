import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div id='main-container'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
