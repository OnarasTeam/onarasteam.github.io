import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import About from './pages/About'

function App() {
  return (
    <div id='main-container'>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
