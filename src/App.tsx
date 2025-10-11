import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const [t] = useTranslation()

  return (
    <div id='main-container'>
      <div id='main-info-card'>
        <div id='main-info-card-title'>
          <h1>ONARA WEB</h1>
          <p>{t('main.info.subtitle')}</p>
        </div>

        <div id='main-info-apps-container'>
          <div className='app'>Onaras</div>
          <div className='app'>Minecraft</div>
          <div className='app'>Pokémon</div>
        </div>
      </div>
    </div>
  )
}

export default App
