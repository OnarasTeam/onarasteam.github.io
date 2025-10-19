import { useSmallClassEM } from '../../hooks/SmallHooks'
import type { CardProps } from './Card'
import Card from './Card'

export default function MainCard({ id, children, gap, sx }: CardProps) {
  const smallClass = useSmallClassEM()

  return (
    <Card id={id} className={`main-card ${smallClass}`} gap={gap} sx={sx}>
      {children}
    </Card>
  )
}
