import { useTranslation } from 'react-i18next'
import Subsection from '../components/Title/Subsection'
import TitleSection from '../components/Title/TitleSection'
import './Main.css'
import { useNavigate } from 'react-router-dom'
import { useScreenSizeEm } from '../hooks/useScreenSize'
import MainCard from '../components/Cards/MainCard'

export default function Main() {
  const [t] = useTranslation()
  const navigate = useNavigate()
  const screenSize = useScreenSizeEm()

  return (
    <MainCard id='main-info-card' width={40} padding={3.5}>
      <div id='main-info-card-title'>
        <h1>ONARA WEB</h1>
        <p>{t('main.info.subtitle')}</p>
      </div>

      <div id='main-info-apps-container'>
        <TitleSection name='Onara'>
          <Subsection name='Onaras' />
        </TitleSection>
        <TitleSection name='Minecraft'>
          <Subsection name='Servidores' />
          <Subsection name='Facciones' />
          <Subsection name='Pactos' />
        </TitleSection>
        <TitleSection
          name='Pokémon'
          onClick={() => {
            navigate('*')
          }}
        />
      </div>
    </MainCard>
  )
}
