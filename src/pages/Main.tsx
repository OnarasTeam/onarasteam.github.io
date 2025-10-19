import { useTranslation } from 'react-i18next'
import Subsection from '../components/Title/Subsection'
import TitleSection from '../components/Title/TitleSection'
import './Main.css'
import { useNavigate } from 'react-router-dom'
import MainCard from '../components/Cards/MainCard'
import { useSmallClassEM } from '../hooks/SmallHooks'

export default function Main() {
  const [t] = useTranslation()
  const navigate = useNavigate()
  const small = useSmallClassEM()

  return (
    <MainCard id='main-info-card'>
      <div id='main-info-card-title'>
        <h1 className={small}>ONARA WEB</h1>
        <p className={small}>{t('main.info.subtitle')}</p>
      </div>

      <div id='main-info-apps-container' className={small}>
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
