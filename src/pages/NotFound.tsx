import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ReplayIcon from '@mui/icons-material/Replay'
import MainCard from '../components/Cards/MainCard'
export default function NotFound() {
  const [t] = useTranslation()
  const navigate = useNavigate()
  return (
    <MainCard gap={60}>
      <h1
        style={{
          width: '8em',
        }}
      >
        {t('not-found.error')}
      </h1>
      <Button zoomOnHover={true} onClick={() => navigate('/')}>
        {t('not-found.reload')}
        <ReplayIcon />
      </Button>
    </MainCard>
  )
}
