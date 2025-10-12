import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  const [t] = useTranslation()
  const navigate = useNavigate()
  return (
    <Card>
      <h1>{t('not-found.error')}</h1>
      <Button zoomOnHover={true} onClick={() => navigate('/')}>
        {t('not-found.reload')}
      </Button>
    </Card>
  )
}
