import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ReplayIcon from '@mui/icons-material/Replay'
export default function NotFound() {
  const [t] = useTranslation()
  const navigate = useNavigate()
  return (
    <Card padding={60} gap={50}>
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
    </Card>
  )
}
