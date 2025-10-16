import { useScreenSizeEm } from '../../hooks/useScreenSize'
import type { CardProps } from './Card'
import Card from './Card'

interface MainCardProps extends CardProps {
  width: number
  padding: number
}

export default function MainCard({ id, children, gap, sx, width, padding }: MainCardProps) {
  const screenSize = useScreenSizeEm()

  function checkSize(): boolean {
    return screenSize.x <= width + padding * 2
  }
  return (
    <Card
      id={id}
      className={`main-card ${checkSize() ? 'small' : ''}`}
      gap={gap}
      sx={{
        ...sx,
        width: `${checkSize() ? '100vw' : `${width}em`}`,
        padding: `${checkSize() ? 0 : padding}em`,
      }}
    >
      {children}
    </Card>
  )
}
