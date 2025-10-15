import './Card.css'

interface CardProps {
  children: React.ReactNode
  id?: string
  padding?: number
  gap?: number
}

export default function Card({ id, children, padding, gap }: CardProps) {
  return (
    <div
      id={id}
      style={{
        padding: padding ?? 'auto',
        gap: gap,
      }}
      className='card'
    >
      {children}
    </div>
  )
}
