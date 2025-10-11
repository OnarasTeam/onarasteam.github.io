import './App.css'
import { useTranslation } from 'react-i18next'
import TitleSection from './components/TitleSection'

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
          <TitleSection name='Onara' />
          <TitleSection name='Minecraft' />
          <TitleSection name='Pokémon' />
        </div>
      </div>
    </div>
  )
}

export default App
