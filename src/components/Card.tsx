import './Card.css'

interface CardProps {
  children: any
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
