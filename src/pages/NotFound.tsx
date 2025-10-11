import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const [t] = useTranslation()
  const navigate = useNavigate()
  return (
    <Card>
      <h1>{t('not-found.error')}</h1>
      <button onClick={() => navigate('/')}>{t('not-found.reload')}</button>
    </Card>
  )
}
